import { detuneTypeFromPitch, getNote, noteFromPitch } from "../brains/AudioMath";
import '../style/HarmonicSeriesNotes.css';
import SineWave from "./SineWave";

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
        <table className='harmonic-table'>
            <tbody>
            <tr className='table-header'>
                <th>Frequency</th>
                <th>Note</th>
                <th>Vibration of String</th>
            </tr>
            {
                harmonicSeriesElements.map(element => {
                    elementIteration++;
                    return (
                        <tr className='table-entry' key={element.frequency}>
                            <th>{element.frequency} Hz</th>
                            <th>{element.note}</th> 
                            <th className='sine-wave'>
                                <SineWave
                                    frequency={element.frequency}
                                    height={100}
                                    width={400}
                                    waves={elementIteration}
                                />
                            </th>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
        </div>
    )
}

export default HarmonicSeriesNotes;