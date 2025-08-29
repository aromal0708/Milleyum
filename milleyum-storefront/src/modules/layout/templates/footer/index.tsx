import BrandCard from "@modules/common/components/brand-card"
export default async function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 lg:py-16 bg-background font-degular">
      <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-16 lg:px-32 xl:px-56 w-full gap-6 sm:gap-8">
        {/* Brand Card - Full width on mobile, half on desktop */}
        <aside className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <BrandCard
            width={340}
            height={420}
            textSize={32}
            logoHeight={48}
            logoWidth={48}
          />
        </aside>
        
        {/* Contact Form - Full width on mobile, half on desktop */}
        <aside
          className="flex flex-col bg-center bg-no-repeat py-4 sm:py-5 md:py-6 px-4 sm:px-5 md:px-6 h-auto sm:h-[350px] md:h-[380px] lg:h-[420px] w-full md:w-1/2 rounded-lg sm:rounded-xl md:rounded-2xl"
          style={{
            backgroundImage: "url('/assets/Poster_3.jpg')",
            backgroundSize: "100% 100%",
          }}
        >
          <h2 className="text-white text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Us</h2>

          <form className="flex flex-col gap-2 sm:gap-3 flex-1">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-white text-xs font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-transparent px-3 py-2 rounded-md border border-white/40 text-white text-sm placeholder-white/60 focus:border-white focus:outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-white text-xs font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-transparent px-3 py-2 rounded-md border border-white/40 text-white text-sm placeholder-white/60 focus:border-white focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-white text-xs font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="bg-transparent px-3 py-2 rounded-md border border-white/40 text-white text-sm placeholder-white/60 focus:border-white focus:outline-none transition-colors"
                placeholder="+91 12345 67890"
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label
                htmlFor="message"
                className="text-white text-xs font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                className="bg-transparent px-3 py-2 rounded-md border border-white/40 text-white text-sm placeholder-white/60 focus:border-white focus:outline-none transition-colors resize-none flex-1"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-primary font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors w-fit text-sm"
            >
              Send Message
            </button>
          </form>
        </aside>
      </div>

      <div className="mt-6 sm:mt-8">
        <p className="text-primary text-sm text-center">
          © 2025 Milleyum. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
