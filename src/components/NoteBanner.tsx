import { useState } from 'react';
import '../style/NoteBanner.css'
import { CancelAudioStream, EnableLiveInput } from '../brains/AudioSourcer';
import SpeakerOn from '../assets/SpeakerOn.svg'
import SpeakerOff from '../assets/SpeakerOff.svg'

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
            CancelAudioStream();
        }
        else {
            EnableLiveInput(props.updateNoteAndFrequency);
        }

        setHasAudioStarted((hasAudioStarted) => !hasAudioStarted);
    }

    const GetNoteString = (): string => {
        if (props.frequency !== 0 || hasAudioStarted) {
            return `${formattedFrequency} ${formattedNode}`
        }

        return 'To find your harmonic series, click here and play any sound'
        
    }

    const GetHoveredElement = (): JSX.Element | null => {
        const speakerOnIcon = <img height='35px' width='35px' src={SpeakerOn} alt="Speaker is on"/>
        const speakerOffIcon = <img height='35px' width='35px' src={SpeakerOff} alt="Speaker is off"/>

        if (hasAudioStarted && isHover)
            return hasAudioStarted ? speakerOnIcon : speakerOffIcon

        if (!hasAudioStarted && isHover && props.frequency !== 0)
            return speakerOffIcon
        
        return null;
    }

    const formattedFrequency = `${props.frequency} Hz`;
    const formattedNode = props.note !== '' ? `- ${props.note.toString()}` : '';
    return (
        <div onClick={ToggleAudio} className='note-banner' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            {GetNoteString()} {GetHoveredElement()}
        </div>
    )
}

export default NoteBanner;