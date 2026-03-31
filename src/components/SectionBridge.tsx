export default function SectionBridge() {
	return (
		<div aria-hidden className="relative h-16 bg-black">
			<div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
			<div className="absolute inset-x-0 top-0 h-px bg-white/10" />
			<div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
			<div className="absolute left-1/2 top-1/2 h-px w-40 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />
			<div className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/80" />
		</div>
	)
}
