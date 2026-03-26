import Image01 from '../assets/images/SmokedMapleLatte.avif'
import Image02 from '../assets/images/ReservePourOver.avif'
import Image03 from '../assets/images/BurntHoneyCroissant.avif'

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
]

export default function Menu() {
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

				<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
					{items.map((item) => (
						<article
							key={item.title}
							className="rounded border border-orange-500/20 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"
						>
							<div className="rounded bg-black/20 p-3">
								<img
									src={item.imageSrc}
									alt={item.imageAlt}
									className="aspect-square w-full rounded object-cover"
									loading="lazy"
									decoding="async"
								/>
							</div>

							<div className="mt-6 flex items-baseline justify-between gap-4">
								<h3 className="text-lg font-semibold text-white/90">{item.title}</h3>
								<p className="text-sm font-semibold text-orange-400">{item.price}</p>
							</div>

							<p className="mt-3 text-sm leading-6 text-white/60">{item.description}</p>
						</article>
					))}
				</div>

				<div className="mt-12 flex justify-center">
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

