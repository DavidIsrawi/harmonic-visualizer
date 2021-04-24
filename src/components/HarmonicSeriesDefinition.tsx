import '../style/HarmonicSeriesDefinition.css';

const HarmonicSeriesDefinition = () => {
    return (
        <div className='description'>
            <h3 className='subheader'>The Harmonic Series in Music</h3>
            <p>
                When a tone is played (not only in music, but also in nature). What we hear is a mix of tone - it starts with a low tone which is the intended one, and it's followed by a series of higher pitch tones that are relative to the initial tone.
            </p>
            <p>
                Althought this is an infinite series, we can only hear a small subset of these tones.
            </p>
            <p>
                These following tones are called harmonics or overtones
            </p>

            <h3 className='subheader'>Why does this happen?</h3>
            <p>
                Imagine you are playing a guitar.
            </p>
            <p>
                When we hit a string, we produce a tone which is dictated by the frequency at which that string is bouncing up and down. The string is now vibrating, creating a series of sine waves - the first sine wave is one big wave bouncing throug the whole string, the second one is of two waves, the third of three waves and so on.
            </p>
            <p>
                The tones produced by the string come from the wavelength of those sine waves which are all happening together - the first series has one long sine wave, it has the smallest frequency and therefore the lowest tone, and the following frequencies will come from the subsequent sine waves in the series which are getting smaller and smaller, therefore playing higher and higher tones.
            </p>
        </div>
    )
}

export default HarmonicSeriesDefinition;