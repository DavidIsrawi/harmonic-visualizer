import { useEffect, useRef } from 'react'

interface SineWaveProps {
    frequency: number
    height: number
    width: number
    waves: number
}

const SineWave = (props: SineWaveProps) => {

    // getComputerStyle can be expensive
    // We can pass the color from the parent whenever the container is hovered
    const GetColor = (): string => {
        const element = document.getElementById(props.frequency.toString());
        if (element === null) return 'white';
        return window.getComputedStyle(element).color;
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

        for (let x = 0; x < canvas.width; x++) {
            const y: number = canvas.height / 2 + 
                // Math.sin takes radians
                // i/total width * pi (pi is half an oscillation) * number of half oscillations we want
                Math.sin(x/canvas.width * Math.PI * props.waves) *
                    50 /* amplitude */ *
                    Math.sin(theta) /* speed */

            context.lineTo(x, y);
        }

        context.lineWidth = 10
        context.strokeStyle = GetColor();
        context.stroke();

        window.requestAnimationFrame(draw);
        theta += 0.1; // speed
    }

    return (
        <canvas
            className='sine-wave'
            ref={canvasRef}
        />
    )
}

export default SineWave;