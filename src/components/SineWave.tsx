import { useEffect, useRef } from 'react'
import * as Tone from 'tone'

interface SineWaveProps {
    frequency: number
    height: number
    width: number
    waves: number
}

const SineWave = (props: SineWaveProps) => {

    const playTone = () => {
        // create a synth and connect it to the main output (your speakers)
        const synth = new Tone.Synth().toDestination();

        // play for the duration of an 8th note
        synth.triggerAttackRelease(props.frequency, "8n");
    }

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)
    let theta: number = 0;

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas === null || canvasRef.current === null) return
        canvas.width = props.width * 2
        canvas.height = props.height * 2
        canvas.style.width = `${props.width}px`
        canvas.style.height = `${props.height}px`

        const context = canvas.getContext('2d')
        if (context === null) return
        contextRef.current = context
        draw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.frequency, props.height, props.width])

    const draw = () => {
        
        if (contextRef.current === null || canvasRef.current === null) return;
        const context: CanvasRenderingContext2D = contextRef.current;
        const canvas: HTMLCanvasElement = canvasRef.current;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath()
        //context.moveTo(0, canvas.height / 2)

        for (let i = 0; i < canvas.width; i++) {
            const y: number = canvas.height / 2 + 
                Math.sin(i *
                    0.0039 * props.waves /* wavelength, 0.39 is an arbitrary number that worked */ +
                    0 /* increment, props.frequency would go here but I want to make it independent of it */) *
                    50 /* amplitude */ *
                    Math.sin(theta) /* speed */
            context.lineTo(i, y);
        }

        context.lineWidth = 10
        context.strokeStyle = "white"
        context.stroke();

        window.requestAnimationFrame(draw);
        theta += 0.1; // speed
    }

    return (
        <canvas
            className='sine-wave'
            onMouseUp={playTone}
            ref={canvasRef}
        />
    )
}

export default SineWave;