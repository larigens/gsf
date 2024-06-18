import React, { useEffect } from 'react';
import { useTheme } from './ThemeContext'; // Import the useTheme hook

export const ModeSwitch = () => {
    const { theme, setTheme } = useTheme(); // Use the useTheme hook to access the theme state and setter

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
    const updateStyles = (currentTheme) => {
        const root = document.documentElement;
        const lightModeStyles = {
            '--background-color': '#fefcfb',
            '--text-main-color': '#0a1128',
            '--text-secondary-color': '#5ea7db',
            '--text-hover-color': '#5ea7db',
            '--background-gradient': '-webkit-linear-gradient(45deg, var(--dark-accent), var(--main-brand), var(--dark-accent))',
            '--box-shadow': '0 5px 25px 0 rgba(31, 38, 135, 0.438)',
            '--icon-color': 'brightness(1) invert(0)',
            '--arrow-icon': 'brightness(0) invert(1)',
            '--border-bottom': '1px solid #0a1128',
            '--hover-link-color': '#034078'
        };
        const darkModeStyles = {
            '--background-color': '#0a1128',
            '--text-main-color': '#fefcfb',
            '--text-secondary-color': '#5ea7db',
            '--background-gradient': '-webkit-linear-gradient(45deg, var(--light-accent), var(--main-brand), var(--light-accent))',
            '--box-shadow': '0 5px 25px 0 rgba(208, 210, 228, 0.925)',
            '--icon-color': 'brightness(0) invert(1)',
            '--arrow-icon': 'brightness(1) invert(0)',
            '--border-bottom': '1px solid #fefcfb',
            '--hover-link-color': '#c1e1f8'
        };

        const selectedStyles = currentTheme === 'Light Mode' ? lightModeStyles : darkModeStyles;

        Object.keys(selectedStyles).forEach((key) => {
            root.style.setProperty(key, selectedStyles[key]);
        });
    };

    // Update styles when component mounts or theme changes
    useEffect(() => {
        updateStyles(theme);
    }, [theme]);

    return (
        <>
            <div className='d-flex justify-content-end me-4'>
                <div className="toggle-switch">
                    <label className={`switch-label ${theme === 'Light Mode' ? 'border-dark' : 'border-light'}`}>
                        <input
                            id='themeSwitch'
                            checked={theme === 'Light Mode'}
                            onChange={handleInputChange}
                            type="checkbox"
                            className='checkbox'
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
            <p className='d-flex justify-content-end fs-14 me-4 pe-1 mt-3'>{theme}</p>
        </>
    );
};