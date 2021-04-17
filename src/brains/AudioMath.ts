const noteStrings: string[] = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export const noteFromPitch = (frequency: number) => {
	var noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
	return Math.round( noteNum ) + 69;
}

const frequencyFromNoteNumber = (note: number) => {
	return 440 * Math.pow(2,(note-69)/12);
}

const centsOffFromPitch = (frequency: number, note: number) => {
	return Math.floor( 1200 * Math.log( frequency / frequencyFromNoteNumber( note ))/Math.log(2) );
}

export const detuneTypeFromPitch = (frequency: number, note: number) => {
	const detune: number = centsOffFromPitch(frequency, note);
	return detune === 0 ? '-' : detune < 0 ? 'flat' : 'sharp';
}

export const getNote = (noteNumber: number) => {
    return noteStrings[noteNumber%12];
}

export const autoCorrelate = (buf: Float32Array, sampleRate: number) => {
	// Implements the ACF2+ algorithm
	var SIZE = buf.length;
	var rms = 0;

	for (var i=0;i<SIZE;i++) {
		var val = buf[i];
		rms += val*val;
	}
	rms = Math.sqrt(rms/SIZE);
	if (rms<0.01) // not enough signal
		return -1;

	var r1=0, r2=SIZE-1, thres=0.2;
	for (var j=0; j<SIZE/2; j++)
		if (Math.abs(buf[j])<thres) { r1=j; break; }
	for (var x=1; x<SIZE/2; x++)
		if (Math.abs(buf[SIZE-x])<thres) { r2=SIZE-x; break; }

	buf = buf.slice(r1,r2);
	SIZE = buf.length;

	var c = new Array(SIZE).fill(0);
	for (var y=0; y<SIZE; y++)
		for (var z=0; z<SIZE-y; z++)
			c[y] = c[y] + buf[z]*buf[z+y];

	var d=0; while (c[d]>c[d+1]) d++;
	var maxval=-1, maxpos=-1;
	for (var w=d; w<SIZE; w++) {
		if (c[w] > maxval) {
			maxval = c[w];
			maxpos = w;
		}
	}
	var T0 = maxpos;

	var x1=c[T0-1], x2=c[T0], x3=c[T0+1];
	const a = (x1 + x3 - 2*x2)/2;
	const b = (x3 - x1)/2;
	if (a) T0 = T0 - b/(2*a);

	return sampleRate/T0;
}