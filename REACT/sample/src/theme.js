import React, { useState } from 'react';

export const Theme = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        // You can also apply the theme to the body directly if needed
        document.body.style.backgroundColor = theme === "light" ? "#ffff" : "#694533";
    };

    return (
        <div className='th'>
            <div style={{ background: theme === "light" ? "#ffff" : "#694533" }}>Theme change</div>
            <div>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </div>
    );
};

export default Theme;
