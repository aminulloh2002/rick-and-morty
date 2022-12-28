import { useState } from "react";
import {FaSun, FaMoon} from "react-icons/fa"

const DarkModeToggle = (props) => {
    const [isDark, setIsDark] = useState(true);

    const toggleDarkModeHandler = () => {
        let mode = !isDark
        setIsDark(mode)
        props.toggleMode(mode)
    }

    return (
        <div onClick={toggleDarkModeHandler} className={`theme-toggle theme-${isDark ? 'dark' : 'light'}`}>
            { isDark ? <FaMoon/> : <FaSun/>}
        </div>
    );
}

export default DarkModeToggle;
