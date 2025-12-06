import { MagneticCursorProvider, Magnetic } from "./MagneticButton";

export default function IOSPointer() {
  return (
    <MagneticCursorProvider>
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-10 p-8">
        
        {/* Title */}
        <h1 className="text-white text-3xl font-bold">iOS Pointer</h1>
        <p className="text-zinc-500 text-sm">Hover over elements below</p>

        {/* 🎯 Buttons */}
        <div className="flex gap-4">
          <Magnetic borderRadius={12}>
            <button className="px-5 py-2.5 bg-white text-black rounded-xl font-medium">
              Button
            </button>
          </Magnetic>

          <Magnetic borderRadius={12}>
            <button className="px-5 py-2.5 bg-zinc-800 text-white rounded-xl font-medium">
              Hover Me
            </button>
          </Magnetic>

          <Magnetic borderRadius={12}>
            <button className="px-5 py-2.5 border border-zinc-700 text-white rounded-xl font-medium">
              Click
            </button>
          </Magnetic>
        </div>

        {/* 🎯 Icons */}
        <div className="flex gap-6">
          {["🏠", "🔍", "⚙️", "❤️", "👤"].map((icon, i) => (
            <Magnetic key={i} borderRadius={24}>
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-xl">
                {icon}
              </div>
            </Magnetic>
          ))}
        </div>

        {/* 🎯 Pills */}
        <div className="flex gap-3">
          {["Design", "Develop", "Motion", "React"].map((text, i) => (
            <Magnetic key={i} borderRadius={20}>
              <span className="px-4 py-1.5 bg-zinc-800 rounded-full text-white text-sm font-medium">
                {text}
              </span>
            </Magnetic>
          ))}
        </div>

        {/* 🎯 Links */}
        <div className="flex gap-8">
          {["About", "Work", "Contact"].map((text, i) => (
            <Magnetic key={i} borderRadius={6}>
              <a href="#" className="text-zinc-400 text-sm font-medium hover:text-white transition-colors">
                {text}
              </a>
            </Magnetic>
          ))}
        </div>

      </div>
    </MagneticCursorProvider>
  );
}