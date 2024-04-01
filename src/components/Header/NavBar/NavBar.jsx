import { Nav } from 'react-bootstrap';
// import { MdMenu } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';


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
        <Nav >
            {navlinks.map((link) => (
                <Link
                    key={link.id}
                    to={link.href}
                    className={classNames(
                        link.current ? 'light-accent' : 'light-shades light-accent-hv',
                        'p-1',
                    )}
                    style={{ marginRight: '20px' }}
                >
                    {link.name}
                </Link>
            ))}
        </Nav>
    );
}
