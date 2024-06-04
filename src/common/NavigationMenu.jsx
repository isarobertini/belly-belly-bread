import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NavigationMenu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleToggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };

    const handleToggleSubMenu = (label) => {
        setOpenSubMenu((prev) => (prev === label ? null : label));
    };

    return (
        <div className={`ffont-lexend tracking-tighter h-24 bg-pink-bright flex items-center justify-between px-6 top-0 z-20`}>
            {/* Navigation */}
            <nav className="flex w-full justify-between lg:justify-center text-2xl">
                {/* Desktop Menu */}
                <ul className="text-yellow-bright desktop-menu hidden space-x-8 lg:flex">
                    <NavItem to="/" label="Belly Belly Bread" />
                    <NavItem
                        label="Performance"
                        subItems={[
                            { to: '/performance', label: 'Performance' },
                            { to: '/performance/act1', label: 'Act 1' },
                            { to: '/performance/act2', label: 'Act 2' },
                            { to: '/performance/act3', label: 'Act 3' },
                        ]}
                        openSubMenu={openSubMenu}
                        handleToggleSubMenu={handleToggleSubMenu}
                    />
                    <NavItem to="/thecookbook" label="The Cookbook" />
                    <NavItem to="/installation" label="Installation" />
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
                        <ul className="text-orange-bright flex flex-col items-center justify-between min-h-[250px]">
                            <NavItem to="/" label="Belly Belly Bread" />
                            <NavItem
                                label="Performance"
                                subItems={[
                                    { to: '/performance', label: 'Performance' },
                                    { to: '/performance/act1', label: 'Act 1' },
                                    { to: '/performance/act2', label: 'Act 2' },
                                    { to: '/performance/act3', label: 'Act 3' },
                                ]}
                                openSubMenu={openSubMenu}
                                handleToggleSubMenu={handleToggleSubMenu}
                            />
                            <NavItem to="/thecookbook" label="The Cookbook" />
                            <NavItem to="/installation" label="Installation" />
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
                .dropdown {
                    display: none;
                    background: #FFF443;
                    padding: 0.5rem 1rem;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    position: absolute;
                    z-index: 30;
                }
                .dropdown-show {
                    display: block;
                }
            `}</style>
        </div>
    );

    function NavItem({ to, label, subItems, openSubMenu, handleToggleSubMenu }) {
        const location = useLocation();
        const isCurrentPage = location.pathname === to || (subItems && subItems.some(item => location.pathname === item.to));

        const handleClick = () => {
            if (subItems) {
                handleToggleSubMenu(label);
            }
        };

        return (
            <li
                className={`relative p-8 ${isCurrentPage ? 'underline decoration-4 text-performance-act-one' : 'hover:text-performance-act-one'
                    } transition-all duration-500 cursor-pointer`}
            >
                <div onClick={handleClick}>
                    {to ? <Link to={to}>{label}</Link> : label}
                </div>
                {subItems && (
                    <ul className={`dropdown ${openSubMenu === label ? 'dropdown-show' : ''}`}>
                        {subItems.map((subItem) => (
                            <li key={subItem.to} className={`hover:text-pink-bright ${location.pathname === subItem.to ? 'underline decoration-4 text-performance-act-one' : ''}`}>
                                <Link to={subItem.to}>{subItem.label}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        );
    }
};
