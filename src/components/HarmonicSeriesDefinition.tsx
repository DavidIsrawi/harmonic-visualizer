import '../style/HarmonicSeriesDefinition.css';

const HarmonicSeriesDefinition = () => {
    return (
        <div className='description'>
            <strong>The Harmonic Series in Music</strong>
            <p>
                When a note is played (not only in music, but also in nature). What we hear is a mix of notes - it starts with a low note which is the intended one, and it's followed by a series of higher pitch notes that are relative to the initial note.
            </p>
            <p>
                Althought this is an infinite series, we can only hear a small set of these following notes.
            </p>
            <p>
                These notes are called harmonics or overtones
            </p>

            <strong>Why does this happen?</strong>
            <p>
                Imagine a string.
            </p>
            <p>
                When we play a note, the tone is dictated by the frequency of the string. The string is bouncing up and down creating a series of sine waves - the first of one wave througout the whole string, the second of two waves, the third of three waves and so on.
            </p>
            <p>
                The notes we listen come from the wavelength of those sine waves - the first series has one long sine wave, therefore it has the smallest frequency and therefore the lowest note, and the following frequencies will come from the subsequent sine wave series which are getting smaller and smaller, therefore playing higher and higher notes.
            </p>
        </div>
    )
}

export default HarmonicSeriesDefinition;