import { useEffect, useMemo, useRef } from 'react'

import heroVideo from '../assets/videos/Kávé összefoglaló - marketing videó.mp4'

const MAX_HERO_SECONDS = 30

type HomeProps = {
	onPrimaryAction?: () => void
	onSecondaryAction?: () => void
}

export default function Home({ onPrimaryAction, onSecondaryAction }: HomeProps) {
	const videoRef = useRef<HTMLVideoElement | null>(null)
	const maxSeconds = useMemo(() => MAX_HERO_SECONDS, [])

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const restart = () => {
			video.currentTime = 0
			void video.play()
		}

		const onTimeUpdate = () => {
			if (Number.isFinite(video.currentTime) && video.currentTime >= maxSeconds) {
				restart()
			}
		}

		const onEnded = () => restart()

		video.addEventListener('timeupdate', onTimeUpdate)
		video.addEventListener('ended', onEnded)

		return () => {
			video.removeEventListener('timeupdate', onTimeUpdate)
			video.removeEventListener('ended', onEnded)
		}
	}, [maxSeconds])

	return (
		<section id="home" className="relative min-h-screen overflow-hidden bg-black">
			<video
				ref={videoRef}
				className="absolute inset-0 h-full w-full object-cover"
				src={heroVideo}
				autoPlay
				muted
				playsInline
				disablePictureInPicture
				preload="auto"
				aria-hidden
			/>

			<div className="absolute inset-0 bg-black/55" />
			<div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/60" />

			<div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 pb-14 pt-28 text-center">
				<h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
					<span>Crafted with</span>
					<br />
					<span className="text-orange-500">Grit &amp; Grace.</span>
				</h1>

				<p className="mt-6 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
					Where industrial edge meets rustic warmth. Pouring meticulously roasted espresso in a
					space designed for connection.
				</p>

				<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href="#menu"
						onClick={(e) => {
							if (!onPrimaryAction) return
							e.preventDefault()
							onPrimaryAction()
						}}
						className="inline-flex items-center justify-center gap-2 rounded bg-orange-500 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
					>
						View Menu <span aria-hidden>→</span>
					</a>
					<a
						href="#visit"
						onClick={(e) => {
							if (!onSecondaryAction) return
							e.preventDefault()
							onSecondaryAction()
						}}
						className="inline-flex items-center justify-center rounded border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white/90 backdrop-blur-sm hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
					>
						Find Us
					</a>
				</div>
			</div>
		</section>
	)
}

