import React, { useState, useEffect } from 'react';

const Color = () => {
    const [theme, setTheme] = useState({ backgroundColor: "#000", color: "#fff" });

    const themes = {
        red: { backgroundColor: "#ff0000", color: "#fff" },
        green: { backgroundColor: "#00ff00", color: "#000" }
    };

    useEffect(() => {
        document.body.style.backgroundColor = theme.backgroundColor;
        document.body.style.color = theme.color;
    }, [theme]);

    const handleThemeChange = (e) => {
        setTheme(themes[e.target.value]);
    };

    return (
        <div>
            <select onChange={handleThemeChange} style={{ margin: "20px" }}>
                <option value="red">Red</option>
                <option value="green">Green</option>
            </select>
        </div>
    );
};

export default Color;
