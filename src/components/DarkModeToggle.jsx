import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa"
import ThemeContext from "../store/theme-context";

const DarkModeToggle = () => {
    const themeCtx = useContext(ThemeContext);

    const { isDarkMode } = themeCtx;

    const toggleDarkModeHandler = () => {
        const mode = !isDarkMode
        themeCtx.toggleDarkMode(mode)
    }

    return (
        <div onClick={toggleDarkModeHandler} className={`theme-toggle theme-${isDarkMode ? 'dark' : 'light'}`}>
            {isDarkMode ? <FaMoon /> : <FaSun />}
        </div>
    );
}

export default DarkModeToggle;
