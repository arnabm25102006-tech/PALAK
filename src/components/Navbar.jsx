export default function Navbar() {
  return (
    <nav className="sticky top-6 z-50 mx-6 md:mx-20 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl px-8 py-5 flex items-center justify-between">

      <h1 className="text-5xl font-black text-green-600 tracking-tight">
        PALAK
      </h1>

      <div className="hidden md:flex gap-2 items-center bg-white/80 backdrop-blur-xl shadow-xl border border-white/50 px-3 py-2 rounded-2xl">

        <a href="#" className="px-5 py-2 rounded-xl bg-green-500 text-white shadow-md font-medium">
          Home
        </a>

        <a href="#" className="px-5 py-2 rounded-xl bg-green-500 text-white shadow-md font-medium">
          Compare
        </a>

        <a href="#" className="px-5 py-2 rounded-xl bg-green-500 text-white shadow-md font-medium">
          Deals
        </a>

      </div>

    </nav>
  );
}