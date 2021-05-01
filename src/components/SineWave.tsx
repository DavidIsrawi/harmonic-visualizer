import { useEffect, useRef } from 'react'

interface SineWaveProps {
    frequency: number
    height: number
    width: number
    waves: number
}

const SineWave = (props: SineWaveProps) => {

    const GetColor = (): string => {
        const defaultColor: string = 'white'
        const hoveredColor: string = '#2f8b44'
        const elementHovered = localStorage.getItem('elementHovered')
        if (elementHovered === null) return defaultColor
        return parseInt(elementHovered, 10) === props.frequency ? hoveredColor : defaultColor
    }

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)
    let theta: number = 0

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
        Draw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.frequency, props.height, props.width])

    const Draw = () => {
        
        if (contextRef.current === null || canvasRef.current === null) return
        const context: CanvasRenderingContext2D = contextRef.current
        const canvas: HTMLCanvasElement = canvasRef.current

        context.clearRect(0, 0, canvas.width, canvas.height)
        context.beginPath()

        for (let x = 0; x < canvas.width; x++) {
            const y: number = canvas.height / 2 + 
                // Math.sin takes radians
                // x/total width * pi (pi is half an oscillation) * number of half oscillations we want
                Math.sin(x/canvas.width * Math.PI * props.waves) *
                    50 /* amplitude */ *
                    Math.sin(theta) /* speed */

            context.lineTo(x, y)
        }

        context.lineWidth = 10
        context.strokeStyle = GetColor()
        context.stroke()

        window.requestAnimationFrame(Draw)
        theta += 0.1 // speed
    }

    return (
        <canvas
            className='sine-wave'
            ref={canvasRef}
        />
    )
}

export default SineWave;