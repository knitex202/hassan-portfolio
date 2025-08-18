export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8">
      <div className="container mx-auto px-6 text-center">
        <p data-testid="footer-copyright">
          &copy; 2024 Hassan Wilson. All rights reserved.
        </p>
        <p className="mt-2 text-sm" data-testid="footer-tagline">
          Full Stack Developer | Content Strategist | Digital Innovation
        </p>
      </div>
    </footer>
  );
}
