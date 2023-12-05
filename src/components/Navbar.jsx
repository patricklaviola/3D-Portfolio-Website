import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-20 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
            <div className="flex items-center justify-center space-x-2"> {/* Flex container for image and text */}
                <img src="../src/assets/images/grapes.png" alt="grapes" className="h-7 w-7 rounded-full" /> {/* Resize image */}
                <p className="blue-gradient_text">
                    PLV
                </p>
            </div>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/Projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar;