interface ToneBannerProps {
    tone: string;
    frequency: number;
}

const ToneBanner = (props: ToneBannerProps) => {
    return (
        <h1>{props.frequency}Hz - {props.tone.toString()}</h1>
    )
}

export default ToneBanner;