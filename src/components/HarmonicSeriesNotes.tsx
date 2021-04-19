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
        <h3>Your Harmonic Series</h3>
        <table className='harmonic-table'>
        <tr className='table-header'>
            <th>Frequency</th>
            <th>Note</th>
        </tr>
        {
            harmonicSeriesElements.map(element => {
                return (
                    <tr className='table-entry' key={element.frequency}>
                        <th>{element.frequency} Hz</th>
                        <th>{element.note}</th> 
                    </tr>
                );
            })
        }
        </table>
        </div>
    )
}

export default HarmonicSeriesNotes;