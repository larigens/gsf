import { Button, Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


export const NavBar = () => {
    const location = useLocation();

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const navlinks = [
        {
            id: 1,
            name: 'What We Do',
            href: '/',
            current: location.pathname === '/'
        },
        {
            id: 2,
            name: 'Who We Are',
            href: '/about-us',
            current: location.pathname === '/about-us'
        },
        {
            id: 3,
            name: 'Join Our Team',
            href: '/careers',
            current: location.pathname === '/careers'
        },
        {
            id: 4,
            name: 'Sectors We Serve',
            href: '/services',
            current: location.pathname === '/services'
        },
        {
            id: 5,
            name: 'Contact Us',
            href: '/contact-us',
            current: location.pathname === '/contact-us'
        },
        {
            id: 6,
            name: 'Sectors We Serve',
            href: '/services',
            current: location.pathname === '/services'
        },
        {
            id: 7,
            name: 'Resources',
            href: '/resources',
            current: location.pathname === '/resources'
        },
        {
            id: 8,
            name: 'Client Login',
            href: '/login',
            current: location.pathname === '/login'
        },
        {
            id: 9,
            name: 'Apply Now',
            href: '/apply-now',
            current: location.pathname === '/apply-now'
        }
    ]

    return (
        <Navbar expand="xl" data-bs-theme="dark" className='mt-3'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                    {navlinks.map((link) => (
                        link.name === 'Apply Now' ?
                            <Button id='apply-btn' key={link.id} onClick={() => window.location.href = link.href} className={classNames(
                                link.current ? 'light-accent remove-bg' : 'light-shades light-accent-hv',
                                'py-1 px-2 fs-18 mx-2',
                            )}
                            >
                                {link.name}

                            </Button>
                            :
                            <Nav.Link
                                key={link.id}
                                to={link.href}
                                className={classNames(
                                    link.current ? 'light-accent' : 'light-shades light-accent-hv',
                                    'p-1 fs-18 mx-2',
                                )}
                            >
                                {link.name}
                            </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}
