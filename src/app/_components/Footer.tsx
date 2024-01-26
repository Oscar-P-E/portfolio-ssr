export default function Footer() {
  return (
    <footer className="pt-24">
      <div className="mx-auto flex min-h-14 max-w-5xl flex-col items-center justify-center gap-x-[8vw] gap-y-4 pb-8 pt-10 text-stone-200 opacity-50 md:flex-row md:px-2">
        <div className="text-2xl">
          email{" "}
          <a href="mailto:oscarssecretary@gmail.com">
            oscarssecretary@gmail.com
          </a>
        </div>
        <div className="text-2xl">
          phone <a href="tel:0421400082">0421 400 082</a>
        </div>
      </div>
    </footer>
  );
}
