import { useEffect, useRef, useState } from "react";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Technologies", href: "#technologies" },
        { label: "Projects", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleMenuKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        document.addEventListener("keydown", handleMenuKeyDown);
        return () => document.removeEventListener("keydown", handleMenuKeyDown);
    }, [isMenuOpen]);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
            <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4">
                <button
                    ref={menuButtonRef}
                    className="inline-flex h-9 w-9 items-center justify-center text-slate-700 md:hidden"
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                        ) : (
                            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <a href="#home" className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 md:static md:translate-x-0">
                    <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">DS</span>
                    <span className="hidden whitespace-nowrap text-lg font-bold tracking-tight text-slate-900 sm:inline">
                        Dev <span className="brand-gradient bg-clip-text text-transparent">Stack</span>
                    </span>
                </a>

                <ul className="hidden items-center gap-6 text-sm font-medium text-[#475569] md:flex" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                aria-current={link.href === "#home" ? "page" : undefined}
                                className={link.href === "#home" ? "text-[#DB2777]" : "transition-colors hover:text-[#DB2777]"}
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="ml-auto flex items-center gap-2 sm:gap-3 md:ml-0">
                    <button className="text-xs font-medium text-[#334155] hover:text-pink-600 sm:text-sm" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                        Sign In
                    </button>

                    <button className="brand-gradient rounded-full px-3 py-2 text-xs font-medium text-white sm:px-4 sm:text-sm" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                        Sign Up
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <ul className="absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-slate-100 bg-white px-4 py-3 shadow-md md:hidden">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                aria-current={link.href === "#home" ? "page" : undefined}
                                className={`block rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-50 hover:text-[#DB2777] ${
                                    link.href === "#home" ? "text-[#DB2777]" : "text-slate-600"
                                }`}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Nav;