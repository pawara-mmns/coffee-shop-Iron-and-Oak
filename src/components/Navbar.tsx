type NavbarProps = {
	onNavClick?: (id: string) => void
}

import logo from '../assets/images/Logo.png'

export default function Navbar({ onNavClick }: NavbarProps) {
	const handleClick = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
		if (!onNavClick) return
		event.preventDefault()
		onNavClick(id)
	}

	return (
		<header className="absolute inset-x-0 top-0 z-20">
			<nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
				<a
					href="#home"
					onClick={handleClick('home')}
					className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
					aria-label="Go to top"
				>
					<img
						src={logo}
						alt="Iron & Oak"
						className="size-7 rounded border border-white/15 bg-white/5 object-contain"
						loading="eager"
						decoding="async"
					/>
					<span className="uppercase">Iron &amp; Oak</span>
				</a>

				<div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
					<a
						href="#vibe"
						onClick={handleClick('vibe')}
						className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
					>
						The Vibe
					</a>
					<a
						href="#menu"
						onClick={handleClick('menu')}
						className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
					>
						Menu
					</a>
					<a
						href="#visit"
						onClick={handleClick('visit')}
						className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
					>
						Visit Us
					</a>
				</div>
			</nav>
		</header>
	)
}

