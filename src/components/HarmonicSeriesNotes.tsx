import { detuneTypeFromPitch, getNote, noteFromPitch } from "../brains/AudioMath";
import '../style/HarmonicSeriesNotes.css';

interface HarmonicSeriesNotesProps {
    frequency: number;
}

interface HarmonicSeriesElement {
    frequency: number;
    note: string;
}

const HarmonicSeriesNotes = (props: HarmonicSeriesNotesProps) => {
    if (props.frequency === 0) return null;

    const numberOfSeriesIterations: number = 8;
    let harmonicSeriesElements: HarmonicSeriesElement[] = [];

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
        <strong>Your Harmonic Series</strong>
        {
            harmonicSeriesElements.map(element => {
                return <p key={element.frequency}>{element.frequency} Hz - {element.note}</p>
            })
        }
        </div>
    )
}

export default HarmonicSeriesNotes;