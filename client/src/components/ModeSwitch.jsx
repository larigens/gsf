import React from 'react';
// import { Form } from 'react-bootstrap';
import { useTheme } from './ThemeContext'; // Import the useTheme hook

export const ModeSwitch = () => {
    const { theme, setTheme } = useTheme(); // Use the useTheme hook to access the theme state and setter
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    // Function to handle theme change
    const handleInputChange = (e) => {
        const { id, checked } = e.target;
        if (id === 'themeSwitch' && checked) {
            setTheme('Light Mode');
        } else {
            setTheme('Dark Mode');
        }
    };

    // Function to update styles based on theme
    const updateStyles = (theme) => {
        if (theme === 'Light Mode') {
            document.documentElement.style.setProperty('--background-color', '#fefcfb'); // Update background color
            document.documentElement.style.setProperty('--text-main-color', '#0a1128'); // Update text color
            document.documentElement.style.setProperty('--text-secondary-color', '#5ea7db'); // Update text color
            document.documentElement.style.setProperty('--text-hover-color', '#5ea7db'); // Update text color
            document.documentElement.style.setProperty('--background-gradient', '-webkit-linear-gradient(45deg, var(--dark-accent), var(--main-brand), var(--dark-accent))'); // Update background color
            document.documentElement.style.setProperty('--box-shadow', '0 5px 25px 0 rgba(31, 38, 135, 0.438)'); // Update box shadow color
            document.documentElement.style.setProperty('--icon-color', 'brightness(1) invert(0)'); // Update icon color
            document.documentElement.style.setProperty('--arrow-icon', 'brightness(0) invert(1)'); // Update icon color
            document.documentElement.style.setProperty('--border-bottom', '1px solid #0a1128;'); // Update border-bottom
            document.documentElement.style.setProperty('--hover-link-color', '#034078;'); // Update link hover color
        } else {
            document.documentElement.style.setProperty('--background-color', '#0a1128'); // Update background color
            document.documentElement.style.setProperty('--text-main-color', '#fefcfb'); // Update text color
            document.documentElement.style.setProperty('--text-secondary-color', '#5ea7db'); // Update text color
            document.documentElement.style.setProperty('--background-gradient', '-webkit-linear-gradient(45deg, var(--light-accent), var(--main-brand), var(--light-accent))'); // Update background color
            document.documentElement.style.setProperty('--box-shadow', '0 5px 25px 0 rgba(208, 210, 228, 0.925)'); // Update box shadow color
            document.documentElement.style.setProperty('--icon-color', 'brightness(0) invert(1)'); // Update icon color
            document.documentElement.style.setProperty('--arrow-icon', 'brightness(1) invert(0)'); // Update icon color
            document.documentElement.style.setProperty('--border-bottom', '1px solid #fefcfb;'); // Update border-bottom
            document.documentElement.style.setProperty('--hover-link-color', '#c1e1f8;'); // Update link hover color
        }
    };

    // Update styles when component mounts or theme changes
    React.useEffect(() => {
        updateStyles(theme);
    }, [theme]);

    return (
        <>
            <div className='d-flex justify-content-end me-4'>
                <div className="toggle-switch">
                    <label className={classNames(
                        theme === 'Light Mode' ? 'border-dark' : 'border-light',
                        'switch-label',
                    )} >
                        <input
                            id='themeSwitch'
                            checked={theme === 'Light Mode'}
                            onChange={handleInputChange}
                            type="checkbox"
                            className='checkbox'
                        />
                        <span className="slider"></span>
                    </label >
                </div>
            </div>
            <p className='d-flex justify-content-end fs-14 me-4 pe-1 mt-3'>{theme}</p>
        </>
    )
}
