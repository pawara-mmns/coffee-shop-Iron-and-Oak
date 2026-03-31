const BRAND = {
	name: 'IRON & OAK',
	legal: 'Iron & Oak Coffee Roasters',
}

const CONTACT = {
	email: 'hello@ironandoak.com',
	phone: '+1 (555) 123-4567',
}

const SOCIAL = [
	{ label: 'Instagram', href: 'https://instagram.com' },
	{ label: 'Facebook', href: 'https://facebook.com' },
	{ label: 'Twitter', href: 'https://x.com' },
]

function phoneHref(phone: string) {
	return `tel:${phone.replace(/[^+\d]/g, '')}`
}

function IconCup(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
			<path
				d="M6 9h10v6a5 5 0 0 1-5 5H9a3 3 0 0 1-3-3V9Z"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinejoin="round"
			/>
			<path
				d="M16 10h2.2a2.8 2.8 0 1 1 0 5.6H16"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinejoin="round"
			/>
			<path
				d="M6 21h12"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
			/>
			<path
				d="M9 3c0 1.4-1 1.6-1 3m4-3c0 1.4-1 1.6-1 3m4-3c0 1.4-1 1.6-1 3"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
			/>
		</svg>
	)
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
			<path
				d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
				stroke="currentColor"
				strokeWidth="1.7"
				strokeLinejoin="round"
			/>
			<path
				d="m5.5 7 6.5 5 6.5-5"
				stroke="currentColor"
				strokeWidth="1.7"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
			<path
				d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z"
				stroke="currentColor"
				strokeWidth="1.7"
				strokeLinejoin="round"
			/>
			<path
				d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
				stroke="currentColor"
				strokeWidth="1.7"
			/>
			<path d="M17.5 6.6h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
		</svg>
	)
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
			<path
				d="M14 8h2V5h-2a4 4 0 0 0-4 4v3H8v3h2v6h3v-6h2.2l.8-3H13V9a1 1 0 0 1 1-1Z"
				stroke="currentColor"
				strokeWidth="1.7"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

function IconTwitter(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
			<path
				d="M16.8 5H19l-5.8 6.6L20 19h-5l-3.9-4.4L6.8 19H4.5l6.3-7.2L4 5h5.2l3.6 4.1L16.8 5Z"
				stroke="currentColor"
				strokeWidth="1.7"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className="relative overflow-hidden bg-black">
			<div className="pointer-events-none absolute inset-0 opacity-80">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.10),rgba(0,0,0,0)_55%)]" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),rgba(0,0,0,0)_60%)]" />
				<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/80" />
			</div>

			<div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-16">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
					<div>
						<div className="flex items-center gap-3">
							<IconCup className="h-7 w-7 text-orange-500" />
							<p className="text-2xl font-extrabold tracking-[0.18em] text-white">{BRAND.name}</p>
						</div>
						<p className="mt-6 max-w-sm text-base leading-7 text-white/60">
							Pouring intentionally sourced, meticulously roasted coffee in the heart of the
							warehouse district.
						</p>

						<div className="mt-8 flex items-center gap-5">
							{SOCIAL.map((item) => {
								const Icon =
									item.label === 'Instagram'
										? IconInstagram
										: item.label === 'Facebook'
											? IconFacebook
											: IconTwitter

								return (
									<a
										key={item.label}
										href={item.href}
										target="_blank"
										rel="noreferrer"
										aria-label={item.label}
										className="inline-flex items-center justify-center text-white/55 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
									>
										<Icon className="h-6 w-6" />
									</a>
								)
							})}
						</div>
					</div>

					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
							Say Hello
						</p>
						<div className="mt-6 space-y-4 text-sm text-white/60">
							<div className="flex items-center gap-3">
								<IconMail className="h-5 w-5 text-white/55" />
								<a
									href={`mailto:${CONTACT.email}`}
									className="text-white/70 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
								>
									{CONTACT.email}
								</a>
							</div>
							<a
								href={phoneHref(CONTACT.phone)}
								className="block text-white/55 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
							>
								{CONTACT.phone}
							</a>
						</div>

						<nav className="mt-8 space-y-4 text-sm text-white/55">
							<a
								href="#"
								className="block hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
							>
								Wholesale Inquiries
							</a>
							<a
								href="#"
								className="block hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
							>
								Careers
							</a>
						</nav>
					</div>

					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
							The Grind (Newsletter)
						</p>
						<p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
							Sign up for updates on fresh bean drops, local events, and exclusive merch.
						</p>

						<form
							className="mt-7 flex flex-col gap-3 sm:flex-row"
							onSubmit={(e) => e.preventDefault()}
						>
							<label className="sr-only" htmlFor="newsletter-email">
								Email address
							</label>
							<input
								id="newsletter-email"
								type="email"
								inputMode="email"
								autoComplete="email"
								placeholder="Your email address"
								className="h-12 w-full rounded border border-white/15 bg-white/5 px-4 text-sm text-white/85 placeholder:text-white/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:w-auto sm:flex-1"
							/>
							<button
								type="submit"
								className="h-12 rounded bg-orange-500 px-7 text-sm font-semibold uppercase tracking-wider text-white hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
							>
								Join
							</button>
						</form>
					</div>
				</div>

				<div className="mt-14 border-t border-white/10 pt-8">
					<p className="text-center text-xs text-white/45">
						© {year} {BRAND.legal}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
