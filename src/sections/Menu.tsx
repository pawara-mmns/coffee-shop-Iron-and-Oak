import Image01 from '../assets/images/SmokedMapleLatte.avif'
import Image02 from '../assets/images/ReservePourOver.avif'
import Image03 from '../assets/images/BurntHoneyCroissant.avif'

import { useEffect, useMemo, useState } from 'react'

const items = [
	{
		title: 'Smoked Maple Latte',
		price: '$6.50',
		description:
			'Double shot of our house blend espresso, infused with real Vermont maple syrup and a hint of smoked sea salt.',
		imageSrc: Image01,
		imageAlt: 'Latte art being poured',
	},
	{
		title: 'Reserve Pour Over',
		price: '$5.00',
		description:
			'Rotating single-origin beans meticulously hand-poured. Currently featuring bright, floral notes from Yirgacheffe, Ethiopia.',
		imageSrc: Image02,
		imageAlt: 'Coffee on a rustic table',
	},
	{
		title: 'Burnt Honey Croissant',
		price: '$4.50',
		description:
			'Flaky, butter-rich layers baked fresh daily, glazed lightly with caramelized local honey and sea salt.',
		imageSrc: Image03,
		imageAlt: 'Pastry and coffee',
	},
	{
		title: 'Seasonal Cold Brew',
		price: '$4.75',
		description:
			'Slow-steeped for a smooth finish, served over crystal ice with rotating seasonal infusions.',
		imageSrc: Image02,
		imageAlt: 'Iced coffee beverage',
	},
	{
		title: 'Cocoa Espresso',
		price: '$5.75',
		description:
			'Bold espresso layered with deep cocoa notes and a silky finish—built for late-night conversations.',
		imageSrc: Image01,
		imageAlt: 'Espresso based drink',
	},
]

export default function Menu() {
	const [activeIndex, setActiveIndex] = useState(0)
	const count = items.length

	const getSignedOffset = useMemo(() => {
		return (index: number) => {
			let diff = (index - activeIndex + count) % count
			if (diff > count / 2) diff -= count
			return diff
		}
	}, [activeIndex, count])

	useEffect(() => {
		if (typeof window === 'undefined') return
		const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
		if (reducedMotion) return

		const id = window.setInterval(() => {
			setActiveIndex((i) => (i + 1) % count)
		}, 3200)

		return () => window.clearInterval(id)
	}, [count])

	return (
		<section id="menu" className="relative overflow-hidden bg-zinc-950">
			<div className="pointer-events-none absolute inset-0 opacity-70">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),rgba(0,0,0,0)_55%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),rgba(0,0,0,0)_60%)]" />
			</div>

			<div className="relative mx-auto w-full max-w-6xl px-6 py-20">
				<header className="mx-auto max-w-3xl text-center">
					<h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
						Signature Pours.
					</h2>
					<p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">
						Crafted with precision, served with warmth. A glimpse into our daily offerings.
					</p>
				</header>

				<div
					className="relative mx-auto mt-28 h-[360px] w-full max-w-6xl sm:h-[430px] md:h-[520px]"
					aria-roledescription="carousel"
					aria-label="Signature pours"
				>
					{items.map((item, index) => {
						const signed = getSignedOffset(index)
						const abs = Math.abs(signed)
						const isActive = signed === 0

						const visible = abs <= 2
						const offset = signed * 280
						const scale = isActive ? 1 : abs === 1 ? 0.93 : 0.87
						const opacity = !visible ? 0 : isActive ? 1 : abs === 1 ? 0.65 : 0.38
						const zIndex = !visible ? 0 : isActive ? 30 : abs === 1 ? 20 : 10
						const extraClass =
							abs === 2 ? 'blur-[1px] brightness-75' : abs === 1 ? 'brightness-90' : ''

						return (
							<div
								key={item.title}
								className="absolute left-1/2 top-1/2 w-[280px] transition-[transform,opacity] duration-700 ease-in-out will-change-transform sm:w-[360px] md:w-[440px]"
								style={{
									transform: `translate(-50%, -50%) translateX(${offset}px)`,
									opacity,
									zIndex,
								}}
								aria-hidden={!isActive}
							>
								<div
									className="transition-transform duration-700 ease-in-out"
									style={{ transform: `scale(${scale})` }}
								>
									<div
										className={`relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.55)] ${extraClass}`}
									>
									<img
										src={item.imageSrc}
										alt={item.imageAlt}
										className="aspect-square w-full object-cover object-center"
										loading="lazy"
										decoding="async"
									/>
									<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-4">
										<div className="flex items-baseline justify-between gap-4">
											<p className="text-sm font-semibold text-white/90">{item.title}</p>
											<p className="text-sm font-semibold text-orange-400">{item.price}</p>
										</div>
									</div>
									</div>
								</div>
							</div>
						)
					})}
				</div>

				<p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-white/55 sm:text-base">
					{items[activeIndex]?.description}
				</p>

				<div className="mt-10 flex justify-center">
					<a
						href="#"
						className="inline-flex items-center justify-center rounded border border-orange-500/40 bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-orange-300 hover:border-orange-400 hover:text-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
					>
						View Full Menu
					</a>
				</div>
			</div>
		</section>
	)
}

