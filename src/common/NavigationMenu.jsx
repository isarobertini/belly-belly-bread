import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavigationMenu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };

    return (
        <div className={`bg-pink-light h-24 text-brown-dark flex items-center justify-between px-6 top-0 z-20`}>
            {/* Navigation */}
            <nav className="flex w-full justify-between lg:justify-center text-2xl">
                {/* Desktop Menu */}
                <ul className="desktop-menu hidden space-x-8 lg:flex">
                    <NavItem to="/" label="Belly Belly Bread" />
                    <NavItem to="/performance" label="Performance" />
                    <NavItem to="/thecookbook" label="The Cookbook" />
                    <NavItem to="/references" label="References" />
                    <NavItem to="/collaborations" label="Collaborations" />
                    <NavItem to="/about" label="About" />
                </ul>

                {/* Mobile Menu */}
                <section className="mobile-menu flex lg:hidden ml-auto">
                    {/* Hamburger Icon */}
                    <div className="hamburger-icon space-y-2" onClick={handleToggleNav}>
                        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
                    </div>

                    {/* Mobile Menu Content */}
                    <div className={`menu-nav ${isNavOpen ? 'show-menu' : 'hide-menu'}`}>
                        <div
                            className="rounded-full absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        >
                            {/* Close Icon */}
                            <svg
                                className="h-8 w-8 text-black"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>

                        {/* Mobile Menu Items */}
                        <ul className="text-brown-dark flex flex-col items-center justify-between min-h-[250px]">
                            <NavItem to="/" label="Belly Belly Bread" />
                            <NavItem to="/performance" label="Performance" />
                            <NavItem to="/thecookbook" label="The Cookbook" />
                            <NavItem to="/references" label="References" />
                            <NavItem to="/collaborations" label="Collaborations" />
                            <NavItem to="/about" label="About" />
                        </ul>
                    </div>
                </section>
            </nav>

            {/* Custom Styles */}
            <style>{`
                .hide-menu {
                    display: none;
                }
                .show-menu {
                    display: flex;
                    position: absolute;
                    width: 100%;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    background: #FFF443;
                    z-index: 10;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }
            `}</style>
        </div>
    );

    // Nested NavItem component for navigation links
    function NavItem({ to, label }) {
        const location = useLocation(); // This ensures useLocation is called correctly
        const isCurrentPage = location.pathname === to;

        return (
            <li className={`p-8 ${isCurrentPage ? 'underline decoration-4 text-pink-bright' : 'hover:text-pink-bright'} transition-all duration-500`}>
                <Link to={to}>{label}</Link>
            </li>
        );
    }
};
