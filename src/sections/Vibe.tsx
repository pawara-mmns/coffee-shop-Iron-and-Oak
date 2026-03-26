import storyImage from '../assets/images/OurStoryImage.avif'

export default function Vibe() {
  return (
    <section id="vibe" className="bg-stone-50">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="rounded border border-stone-300/60 bg-stone-50 p-4">
          <img
            src={storyImage}
            alt="Coffee and atmosphere"
            className="aspect-square w-full rounded object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <div className="flex items-center gap-4">
            <span className="h-px w-14 bg-orange-500/80" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Our Story
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-stone-900 sm:text-5xl">
            Modern Alchemy in a Classic Space.
          </h2>

          <div className="mt-8 space-y-6 text-base leading-7 text-stone-700">
            <p>
              Set within the exposed brick walls of a restored 1920s warehouse, Iron &amp; Oak was
              born from a simple idea: that coffee should be an experience, not just a morning
              ritual.
            </p>
            <p>
              We&apos;ve paired the raw, unfiltered energy of industrial design think matte black
              steel, oxidized copper fixtures, and glowing Edison bulbs with the comforting
              embrace of rich espresso browns and warm amber light. It&apos;s a space to work, to
              gather, and to pause.
            </p>
          </div>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 border-b border-emerald-700/40 pb-2 text-sm font-semibold uppercase tracking-wider text-emerald-800 hover:border-emerald-700 hover:text-emerald-900"
          >
            Read our full ethos <span aria-hidden>›</span>
          </a>
        </div>
      </div>
    </section>
  )
}
