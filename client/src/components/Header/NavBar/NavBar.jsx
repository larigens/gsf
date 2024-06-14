import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const location = useLocation();
    const { theme } = useTheme();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    // Function to detect if the device is mobile or desktop
    const isMobile = () => window.innerWidth <= 768;

    const navlinks = [
        {
            id: 1,
            name: 'About GSF',
            href: '/',
            current: location.pathname === '/',
            isDropdown: true,
            dropDownItems: [
                {
                    id: '12',
                    name: 'Who We Are',
                    href: '/about-us'
                },
                {
                    id: '13',
                    name: 'Careers at GSF',
                    href: '/careers'
                },
            ]

        },
        {
            id: 2,
            name: 'Sectors We Serve',
            href: '/services',
            current: location.pathname === '/services',
            isDropdown: false,
        },
        {
            id: 3,
            name: 'Contact Us',
            href: '/contact-us',
            current: location.pathname === '/contact-us',
            isDropdown: false,
        },
        {
            id: 4,
            name: 'Resources',
            href: '/resources',
            current: location.pathname === '/resources',
            isDropdown: false,
        },
        {
            id: 5,
            name: 'Client Login',
            href: isMobile() ? 'https://m.gsquared.winfactor.com/login/' : 'https://gsquared.winfactor.com/login/',
            current: location.pathname === '/login',
            isDropdown: false,
        },
        {
            id: 6,
            name: 'Apply Now',
            href: '/apply-now',
            current: location.pathname === '/apply-now',
            isDropdown: false,
        }
    ]

    return (
        <Navbar expand="lg" data-bs-theme={theme === 'Light Mode' ? "light" : "dark"} className='mt-3 background'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto d-flex align-items-center" >
                    {navlinks.map(link => (
                        <React.Fragment key={link.id}>
                            {link.name === 'Apply Now' ? (
                                <motion.button
                                    whileHover={{ background: "linear-gradient(45deg, #034078, #5ea7db, #034078)" }}
                                    onClick={() => window.location.href = link.href}
                                    className={classNames(
                                        link.current ? 'secondary-color remove-bg' : '',
                                        'py-1 px-2 fs-18 bg-gradient-dark border-none apply-btn radius-10',
                                    )}
                                >
                                    {link.name}
                                </motion.button>
                            ) : link.isDropdown ? (
                                link.dropDownItems && Array.isArray(link.dropDownItems) ? (
                                    <NavDropdown
                                        bsPrefix='custom-dropdown'
                                        title={link.name}
                                        className='p-1 fs-17 me-2' >
                                        {link.dropDownItems.map(item => (
                                            <NavDropdown.Item key={item.id} href={item.href}>{item.name}</NavDropdown.Item>
                                        ))}
                                    </NavDropdown>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className={classNames(
                                            link.current ? 'secondary-color' : 'main-color hover-color',
                                            'p-1 fs-18 me-2',
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ) : (
                                <Link
                                    to={link.href}
                                    className={classNames(
                                        link.current ? 'secondary-color' : 'main-color hover-color',
                                        'p-1 fs-18 me-2',
                                    )}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}
