import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const getNavLinkClass = () => {
        if (location.pathname === "/") {
            return 'text-white';
        } else {
            return ({ isActive }) => isActive ? 'text-blue-500' : 'text-black';
        }
    };

    const handleReload = () => {
        if (location.pathname === '/') {
            window.location.reload();
        }
    };



    return (
        <header className="header">
            <NavLink 
                to="/" 
                className="w-20 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
                onClick={handleReload}
            >
                <div className="flex items-center justify-center space-x-2">
                    {/* <img src="../src/assets/images/grapes.png" alt="grapes" className="h-7 w-7 rounded-full" /> */}
                    <p className="blue-gradient_text">
                        PLV
                    </p>
                </div>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={getNavLinkClass()}>
                    About
                </NavLink>
                <NavLink to="/Projects" className={getNavLinkClass()}>
                    Projects
                </NavLink>
                <NavLink to="/Contact" className={getNavLinkClass()}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar;