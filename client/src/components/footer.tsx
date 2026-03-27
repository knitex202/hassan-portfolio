export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-2 text-slate-500">
      <div className="container mx-auto max-w-6xl text-center">
        <p data-testid="footer-copyright">
          &copy; {new Date().getFullYear()} Hassan Wilson. All rights reserved.
        </p>
        <p className="mt-2 text-sm" data-testid="footer-tagline">
          Full Stack Developer | Content Strategist | Owner, Trendr Social
        </p>
      </div>
    </footer>
  );
}
