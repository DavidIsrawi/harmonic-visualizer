import '../style/HarmonicSeriesDefinition.css';

const HarmonicSeriesDefinition = () => {
    return (
        <div className='description'>
            <h3 className='subheader'>The Harmonic Series in Music</h3>
            <p>
                Imagine you strike a string in a guitar.
            </p>
            <p>
                Now, you are expecting to hear back a tone - the one that corresponds to the string. In reality, what we end up hearing is much more than that - it is a whole collection of tones. The collection starts with a low tone which is the intended one, and it's followed by a series of higher pitch tones that are relative to the initial tone.
            </p>
            <p>
                Althought this is an infinite series, we can only hear a small subset of these tones.
            </p>
            <p>
                These following tones are called harmonics or overtones
            </p>

            <h3 className='subheader'>Why does this happen?</h3>
            
            <p>
                When we hit a string, the string starts bouncing up and down creating a vibration. The tone we are producing is dictated by the frequency at which the string is vibrating. This vibration is creating a series of sine waves - the first sine wave is one big wave bouncing through the whole string, the second one is of two waves, the third of three waves, and so on. All these different vibrations in the string are happening at the same time!
            </p>
            <p>
                The tones produced by the string come from the wavelength of those sine waves - the first series has one long sine wave, it has the smallest frequency and therefore the lowest tone, and the following frequencies will come from the subsequent sine waves in the series which are getting smaller and smaller, therefore playing higher and higher tones.
            </p>
        </div>
    )
}

export default HarmonicSeriesDefinition;