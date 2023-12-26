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
                className="w-20 h-10 mr-3 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
                onClick={handleReload}
            >
                <div className="flex items-center justify-center space-x-2">
                    <p className="blue-gradient_text">
                        PLV
                    </p>
                </div>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={getNavLinkClass()}>
                    About
                </NavLink>
                <NavLink to="/projects" className={getNavLinkClass()}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={getNavLinkClass()}>
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar;