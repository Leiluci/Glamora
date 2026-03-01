'use client'

export default function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <img
        src="https://placehold.co/1200x600"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl font-light">
          GLAMORA HERO
        </h1>
      </div>
    </section>
  )
}
