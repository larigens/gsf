import React from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';

export const NavBar = () => {
    const location = useLocation();
    const { theme } = useTheme();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    const navlinks = [
        {
            id: 1,
            name: 'What We Do',
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
                    name: 'Join Our Team',
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
            href: '/login',
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
                                <Button
                                    onClick={() => window.location.href = link.href}
                                    className={classNames(
                                        link.current ? 'secondary-color remove-bg' : '',
                                        'py-1 px-2 fs-18 bg-gradient-dark border-none apply-btn',
                                    )}
                                >
                                    {link.name}
                                </Button>
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
                                    <Nav.Link
                                        to={link.href}
                                        className={classNames(
                                            link.current ? 'secondary-color' : 'main-color hover-color',
                                            'p-1 fs-18 me-2',
                                        )}
                                    >
                                        {link.name}
                                    </Nav.Link>
                                )
                            ) : (
                                <Nav.Link
                                    to={link.href}
                                    className={classNames(
                                        link.current ? 'secondary-color' : 'main-color hover-color',
                                        'p-1 fs-18 me-2',
                                    )}
                                >
                                    {link.name}
                                </Nav.Link>
                            )}
                        </React.Fragment>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
