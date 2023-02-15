//https://jshakespeare.com/simple-count-up-number-animation-javascript-react/
import React, { useEffect, useState } from 'react'

const easeOutQuad = (t: number) => t * (2 - t)
const frameDuration = 1000 / 60

export const CounterUpAnimation = ({ countTo, duration = 1000}: { countTo: number, duration?: number }) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		let frame = 0
        const totalFrames = Math.round(duration / frameDuration)
        
		const counter = setInterval(() => {
            frame++
            
			const progress = easeOutQuad(frame / totalFrames)
			setCount(countTo * progress)

			if (frame === totalFrames) clearInterval(counter)
		}, frameDuration)
	}, [countTo, duration])

    return <>{Math.floor(count)}</>
}
