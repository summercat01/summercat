export default function Header() {
  return (
    <header className="pointer-events-none absolute left-0 top-0 flex w-full justify-between p-6 text-white">
      <h1 className="pointer-events-auto select-none text-xl font-bold">SummerCat</h1>
      <span className="pointer-events-auto select-none text-sm uppercase tracking-wide">
        Explore &amp; Connect
      </span>
    </header>
  );
}

