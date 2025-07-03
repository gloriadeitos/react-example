import './styles.css';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/header';

import steve from '../../assets/imagem.png';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <p>Essa é a home</p>

            <button
                className="btn-access"
                onClick={() => navigate('/aa')}>
                Acessar
            </button>

            <img src={steve} alt="Logo CEPAG" />
        </div>
    );
}

export default Home;