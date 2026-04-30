import lightLogo from '../../assets/logo/light-mode.svg';
import darkLogo from '../../assets/logo/dark-mode.svg';

export default function AppLogoIcon({ className }: { className?: string }) {
    return (
        <>
            <img
                src={lightLogo}
                alt="logo"
                className={`block dark:hidden ${className}`}
            />
            <img
                src={darkLogo}
                alt="logo"
                className={`hidden dark:block ${className}`}
            />
        </>
    );
}
