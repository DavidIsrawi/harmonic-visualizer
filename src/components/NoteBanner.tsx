import '../style/NoteBanner.css'

interface NoteBannerProps {
    note: string;
    frequency: number;
}

const NoteBanner = (props: NoteBannerProps) => {
    return (
        <p className='main-note'>{props.frequency} Hz - {props.note.toString()}</p>
    )
}

export default NoteBanner;