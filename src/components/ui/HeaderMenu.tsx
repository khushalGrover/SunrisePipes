import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HeaderMenu = () => (
    <header className="container mx-auto px-4 py-6 ">
        <nav className="flex justify-between items-center">
            <Link to="https://sunrisepipes-3d.vercel.app/" className="text-2xl font-bold text-blue-600">
                <span className="text-yel">Sunrise</span>
                <span className="text-ora">Pipes</span>
                <span className="text-blu">.in</span>
            </Link>
            <ul className="flex space-x-6">
                <li>
                    <Link
                        to="/"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/products"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Products
                    </Link>
                </li>
                <li>
                    <Link
                        to="/brouchure"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Brochure
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export { HeaderMenu }; // Export HeaderMenu