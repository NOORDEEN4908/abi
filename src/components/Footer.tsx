export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-[#080810]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="display-font text-lg font-extrabold">
            <span className="gradient-text">A</span>
            <span className="text-white/70">JS</span>
          </span>
          <span className="text-white/20 text-sm">— Graphic Designer & Digital Marketer</span>
        </div>
        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()} Abhishek JS. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
