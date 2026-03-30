import imageA from '../assets/images/Gallery02.avif'
import imageB from '../assets/images/Gallery01.avif'
import imageC from '../assets/images/Gallery03.avif'
import imageD from '../assets/images/Gallery04.avif'

export default function Gallery() {
	return (
		<section id="gallery" className="bg-stone-50">
			<div className="mx-auto w-full max-w-6xl px-6 py-20">
				<header className="mx-auto max-w-2xl text-center">
					<h2 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
						The Space.
					</h2>
					<p className="mt-4 text-sm leading-6 text-stone-600 sm:text-base">
						Raw textures, warm light, and the lingering scent of roasted beans.
					</p>
				</header>

				<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
					<div className="overflow-hidden rounded bg-stone-100 shadow-sm ring-1 ring-stone-200">
						<img
							src={imageA}
							alt="Cafe interior"
							className="h-full w-full object-cover"
							loading="lazy"
							decoding="async"
						/>
					</div>

					<div className="grid grid-cols-1 gap-6">
						<div className="overflow-hidden rounded bg-stone-100 shadow-sm ring-1 ring-stone-200">
							<img
								src={imageB}
								alt="Coffee tools and pour over"
								className="aspect-[16/11] w-full object-cover"
								loading="lazy"
								decoding="async"
							/>
						</div>

						<div className="grid grid-cols-2 gap-6">
							<div className="overflow-hidden rounded bg-stone-100 shadow-sm ring-1 ring-stone-200">
								<img
									src={imageC}
									alt="Latte service"
									className="aspect-[4/3] w-full object-cover"
									loading="lazy"
									decoding="async"
								/>
							</div>
							<div className="overflow-hidden rounded bg-stone-100 shadow-sm ring-1 ring-stone-200">
								<img
									src={imageD}
									alt="Fresh pastry"
									className="aspect-[4/3] w-full object-cover"
									loading="lazy"
									decoding="async"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
