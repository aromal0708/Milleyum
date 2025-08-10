import Image from "next/image"

export default async function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-16  bg-background font-degular">
      <div className="flex flex-row px-56  w-full gap-8">
        <aside
          className="flex flex-col justify-between items-center gap-6 bg-center bg-no-repeat py-12 px-16 h-[420px] min-w-[340px] rounded-2xl"
          style={{
            backgroundImage: "url('/assets/Poster_1.jpg')",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="text-center mt-4">
            <Image
              src="/assets/wordmark_transp.png"
              alt="Milleyum Wordmark"
              width={200}
              height={100}
            />
          </div>
          <div className="text-center flex-col flex items-center font-gardein font-bold text-3xl text-white">
            <div>No nasties.</div>
            <div>No nonsense.</div>
          </div>
          <div className="w-12 h-12 mb-4">
            <Image
              src="/assets/logomark_transp.png"
              alt="Milleyum Logo"
              width={300}
              height={300}
            />
          </div>
        </aside>
        <aside
          className="flex flex-col bg-center bg-no-repeat py-6 px-6 h-[420px] w-full rounded-2xl"
          style={{
            backgroundImage: "url('/assets/Poster_3.jpg')",
            backgroundSize: "100% 100%",
          }}
        >
          <h2 className="text-white text-xl font-semibold mb-4">Contact Us</h2>

          <form className="flex flex-col gap-3 flex-1">
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

      <div className="mt-8">
        <p className="text-primary text-sm text-center">
          © 2025 Milleyum. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
