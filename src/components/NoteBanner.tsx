import '../style/NoteBanner.css'

interface NoteBannerProps {
    note: string;
    frequency: number;
}

const NoteBanner = (props: NoteBannerProps) => {
    const formattedFrequency = `${props.frequency} Hz`;
    const formattedNode = props.note !== '' ? `- ${props.note.toString()}` : '';
    return (
        <p className='main-note'>{formattedFrequency} {formattedNode}</p>
    )
}

export default NoteBanner;