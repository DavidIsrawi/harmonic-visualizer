import { autoCorrelate, detuneTypeFromPitch, getNote, noteFromPitch } from "./AudioMath";

let mediaStreamSource = null;
let analyser: AnalyserNode;
let audioContext: AudioContext;
var buflen = 2048;
var buf = new Float32Array( buflen );
var audioInitialized: boolean = false;
var rafID: number = 0;
var previousNote: string = '';
let updateNoteFrequency: (newNote: string, newFrequency: number) => void;

const InitAudio = () => {
    audioContext = new AudioContext();
    audioInitialized = true;
}

const STREAM_CONSTRAINTS: MediaStreamConstraints = {
    audio: {
        advanced: [{
            echoCancellation: false,
            autoGainControl: false,
            noiseSuppression: false,
        }]
    }
}

const error = () => {
    alert('Stream generation failed.');
}

const GetUserMedia = (callback: NavigatorUserMediaSuccessCallback) => {
    try {
        navigator.getUserMedia(STREAM_CONSTRAINTS, callback, error);
    } catch (e) {
        alert('getUserMedia threw exception :' + e);
    }
}

export const EnableLiveInput = (callbackForNoteFrequency: (newNote: string, newFrequency: number) => void) => {
    if (!audioInitialized) InitAudio();
    updateNoteFrequency = callbackForNoteFrequency;
    GetUserMedia(GotStream);
}

export const CancelAudioStream = () => {
    window.cancelAnimationFrame(rafID);
    console.log('Audio stream stopped');
}

const GotStream = (stream: MediaStream) => {
    // Create an AudioNode from the stream.
    mediaStreamSource = audioContext.createMediaStreamSource(stream);

    // Connect it to the destination.
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    mediaStreamSource.connect(analyser);
    UpdatePitch();
}

const UpdatePitch = () => {
    analyser.getFloatTimeDomainData( buf );
	var ac = autoCorrelate( buf, audioContext.sampleRate );
    
    if (ac !== -1) {
        const pitch = Math.round(ac);
        const note = noteFromPitch(pitch);

        // TODO: Find relation between pitch and frequency (hertz)
        // For now I'm assuming they're the same
        const detuneType = detuneTypeFromPitch(ac, note);
        const newNote = `${getNote(note%12)} ${detuneType}`
        if (previousNote === '' || previousNote !== newNote) {
            //console.log(`${pitch}Hz - ${newNote}`);
            previousNote = newNote;
        }
        updateNoteFrequency(newNote, pitch);
    }

    if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = window.webkitRequestAnimationFrame;
    }

    rafID = window.requestAnimationFrame(UpdatePitch);
}