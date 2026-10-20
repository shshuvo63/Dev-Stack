
export default function Footer() {
  return (
    <footer className="w-full bg-white text-slate-600 font-sans border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        {/* Upper Section: Brand Info & Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Column (Left) */}
          <div className="md:col-span-5 space-y-4 pr-0 md:pr-8">
            {/* Logo & Title */}
            <div className="flex items-center gap-2">
              <div className="brand-gradient w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm tracking-tighter">
                DS
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev <span className="brand-gradient bg-clip-text text-transparent">Stack</span>
              </span>
            </div>

            {/* Subtitle / Description */}
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Links (Right) */}
          <div className="md:col-span-7 grid grid-cols-1 gap-6 pt-1 sm:grid-cols-3 md:pt-0">
            {/* Product Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                PRODUCT
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#home" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Technologies
                  </a>
                </li>
                <li id="projects" className="scroll-mt-20">
                  <a href="#projects" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                COMPANY
              </h3>
              <ul className="space-y-3 text-sm">
                <li id="about" className="scroll-mt-20">
                  <a href="#about" className="text-slate-500 hover:text-slate-900 transition-colors">
                    About
                  </a>
                </li>
                <li id="contact" className="scroll-mt-20">
                  <a href="#contact" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                LEGAL
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Divider & Copyright */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}