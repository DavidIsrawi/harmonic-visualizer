import { useState } from 'react';
import '../style/NoteBanner.css'
import { cancelAudioStream, enableLiveInput } from '../brains/AudioSourcer';

interface NoteBannerProps {
    note: string;
    frequency: number;
    updateNoteAndFrequency: (newNote: string, newFrequency: number) => void;
}

const NoteBanner = (props: NoteBannerProps) => {
    const [hasAudioStarted, setHasAudioStarted] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const ToggleAudio = () => {
        if (hasAudioStarted) {
            cancelAudioStream();
        }
        else {
            enableLiveInput(props.updateNoteAndFrequency);
        }

        setHasAudioStarted((hasAudioStarted) => !hasAudioStarted);
    }

    const getNoteString = (): string => {
        if (props.frequency !== 0 || hasAudioStarted) {
            return `${formattedFrequency} ${formattedNode}`
        }

        return 'To find your harmonic series, click here and play any sound'
        
    }

    const getHoveredElement = (): JSX.Element | null => {
        if (hasAudioStarted && isHover)
            return <p className='note-banner-audio'> {hasAudioStarted ? 'Pause' : 'Resume'}</p>

        if (!hasAudioStarted && isHover && props.frequency !== 0)
            return <p className='note-banner-audio'>Resume</p>
        
        return null;
    }

    const formattedFrequency = `${props.frequency} Hz`;
    const formattedNode = props.note !== '' ? `- ${props.note.toString()}` : '';
    return (
        <div onClick={ToggleAudio} className='note-banner' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div className='note-banner-note'>{getNoteString()}</div>
            {getHoveredElement()}
        </div>
    )
}

export default NoteBanner;