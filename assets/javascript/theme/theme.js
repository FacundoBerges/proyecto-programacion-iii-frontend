/**
 * Toggles theme button icon between moon and lightbulb.
 * 
 * @param {'dark' | 'light'} theme Preferred theme, string 'dark' or 'light'.
 */
const setThemeButton = (theme) => {
    const themeButtonLogo = document.querySelector("#theme-toggle-logo");

    themeButtonLogo.classList.remove(theme === 'light' ? 'fa-lightbulb' : 'fa-moon');
    themeButtonLogo.classList.add(theme === 'light' ? 'fa-moon' : 'fa-lightbulb');
};

/**
 * Toggles the theme between light and dark mode
 * 
 * @param {'dark' | 'light'} theme Preferred theme, string 'dark' or 'light'.
 */
const setTheme = (theme) => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.body.classList.toggle('light-theme', theme === 'light');
    sessionStorage.setItem('theme', theme);

    setThemeButton(theme);
}

/**
 * Setup the theme toggle button
 * 
 * This function will add a click event listener to the theme toggle button and toggle the theme between light and dark mode.
 */
export const setupThemeToggle = () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (!themeToggle)
        console.error('Theme toggle button not found');

    const preferredTheme = sessionStorage.getItem('theme') || prefersDarkScheme;

    if (preferredTheme)
        setTheme(preferredTheme);
    else
        setTheme(prefersDarkScheme.matches ? 'dark' : 'light');

    //* Event listeners
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    prefersDarkScheme.addEventListener('change', (e) => {
        setTheme(e.matches ? 'dark' : 'light');
    });
}

