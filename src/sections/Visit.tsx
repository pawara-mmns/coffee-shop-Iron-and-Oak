const LOCATION = {
	name: 'Iron & Oak',
	addressLine1: '112 Foundry Lane',
	addressLine2: 'Warehouse District',
	cityLine: 'Portland, OR 97205',
	phone: '+1 (503) 555-0199',
	email: 'hello@ironandoak.coffee',
}

const HOURS: Array<{ label: string; value: string }> = [
	{ label: 'Mon–Thu', value: '7:00 AM – 8:00 PM' },
	{ label: 'Fri', value: '7:00 AM – 10:00 PM' },
	{ label: 'Sat', value: '8:00 AM – 10:00 PM' },
	{ label: 'Sun', value: '8:00 AM – 6:00 PM' },
]

function buildMapsUrl() {
	const query = `${LOCATION.name}, ${LOCATION.addressLine1}, ${LOCATION.cityLine}`
	return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}

function buildDirectionsHref() {
	const query = `${LOCATION.name}, ${LOCATION.addressLine1}, ${LOCATION.cityLine}`
	return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export default function Visit() {
	return (
		<section id="visit" className="bg-stone-50">
			<div className="mx-auto w-full max-w-6xl px-6 py-20">
				<header className="mx-auto max-w-2xl text-center">
					<h2 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
						Visit Us.
					</h2>
					<p className="mt-4 text-sm leading-6 text-stone-600 sm:text-base">
						Drop in for a slow pour, a quick espresso, or an easy corner to stay awhile.
					</p>
				</header>

				<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
					<div className="space-y-6">
						<div className="rounded bg-white p-6 shadow-sm ring-1 ring-stone-200">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
								Location
							</p>
							<p className="mt-4 text-lg font-semibold text-stone-900">{LOCATION.name}</p>
							<p className="mt-2 text-sm leading-6 text-stone-700">
								{LOCATION.addressLine1}
								<br />
								{LOCATION.addressLine2}
								<br />
								{LOCATION.cityLine}
							</p>

							<div className="mt-5 flex flex-col gap-3 sm:flex-row">
								<a
									href={buildDirectionsHref()}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center justify-center rounded bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
								>
									Get Directions
								</a>
								<a
									href={`tel:${LOCATION.phone.replace(/[^+\\d]/g, '')}`}
									className="inline-flex items-center justify-center rounded border border-stone-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
								>
									Call
								</a>
							</div>
						</div>

						<div className="rounded bg-white p-6 shadow-sm ring-1 ring-stone-200">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
								Hours
							</p>
							<dl className="mt-4 space-y-3">
								{HOURS.map((row) => (
									<div key={row.label} className="flex items-baseline justify-between gap-6">
										<dt className="text-sm font-medium text-stone-800">{row.label}</dt>
										<dd className="text-sm text-stone-700">{row.value}</dd>
									</div>
								))}
							</dl>
							<p className="mt-5 text-xs leading-5 text-stone-500">
								Holiday hours may vary.
							</p>
						</div>

						<div className="rounded bg-white p-6 shadow-sm ring-1 ring-stone-200">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
								Contact
							</p>
							<div className="mt-4 space-y-2 text-sm text-stone-700">
								<p>
									<span className="font-medium text-stone-800">Phone:</span> {LOCATION.phone}
								</p>
								<p>
									<span className="font-medium text-stone-800">Email:</span>{' '}
									<a
										href={`mailto:${LOCATION.email}`}
										className="text-stone-800 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-500"
									>
										{LOCATION.email}
									</a>
								</p>
							</div>
						</div>
					</div>

					<div className="overflow-hidden rounded bg-stone-100 shadow-sm ring-1 ring-stone-200">
						<iframe
							src={buildMapsUrl()}
							title="Map to Iron & Oak"
							className="h-[420px] w-full"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
