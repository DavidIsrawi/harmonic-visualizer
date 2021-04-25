import { detuneTypeFromPitch, getNote, noteFromPitch } from "../brains/AudioMath";
import '../style/HarmonicSeriesNotes.css';
import SineWave from "./SineWave";
import * as Tone from 'tone'


interface HarmonicSeriesNotesProps {
    frequency: number;
}

interface HarmonicSeriesElement {
    frequency: number;
    note: string;
}

const PlayTone = (synth: Tone.Synth, frequency: number) => {
    // play for the duration of an 8th note
    synth.triggerAttackRelease(frequency, "8n");    
}

const HarmonicSeriesNotes = (props: HarmonicSeriesNotesProps) => {
    if (props.frequency === 0) return null;

    // create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();

    const numberOfSeriesIterations: number = 8;
    let harmonicSeriesElements: HarmonicSeriesElement[] = [];
    let elementIteration: number = 0;

    for (let seriesElem = 0; seriesElem < numberOfSeriesIterations; seriesElem++) {
        const noteNumber = noteFromPitch(props.frequency * (seriesElem + 1));
        const note = getNote(noteNumber % 12);
        const detune = detuneTypeFromPitch(props.frequency, noteNumber);
        const element: HarmonicSeriesElement = {
            frequency: props.frequency * (seriesElem+1),
            note: `${note} ${detune}`
        };

        harmonicSeriesElements[seriesElem] = element;
    }

    return(
        <div className='harmonic-series'>
        <h3>Your Harmonic Series</h3>
        <div className='harmonic-table-container'>
            <div>Frequency - Note</div>
            <div className='wave-header'>Vibration of String</div>
        </div>
        {
            harmonicSeriesElements.map(element => {
                elementIteration++;
                return (
                    <div className='harmonic-element-container' key={element.frequency} onClick={() => PlayTone(synth, element.frequency)}>
                        <div id={element.frequency.toString()}>{element.frequency} Hz - {element.note}</div>
                        <div className='sine-wave'>
                            <SineWave
                                frequency={element.frequency}
                                height={100}
                                width={400}
                                waves={elementIteration}
                            />
                        </div>
                    </div>
                );
            })
        }
        </div>
    )
}

export default HarmonicSeriesNotes;