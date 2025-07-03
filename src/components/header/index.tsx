import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="w-full bg-cyan-100 p-4 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <div>
                    <FontAwesomeIcon icon={faHouse} />
                    <h1 className="text-xl font-bold">Meu Site</h1>
                </div>

                <p>aaaa</p>

                <p>bbbb</p>

                <nav className="space-x-4">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Sobre</a>
                    <a href="#" className="hover:underline">Contato</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
