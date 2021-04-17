interface ToneBannerProps {
    note: string;
    frequency: number;
}

const ToneBanner = (props: ToneBannerProps) => {
    return (
        <h1>{props.frequency}Hz - {props.note.toString()}</h1>
    )
}

export default ToneBanner;