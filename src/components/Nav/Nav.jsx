import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav ({ onSearch }) {
    return (
        <nav className={style.navbar}>
            <h2>WELCOME!</h2>
            <SearchBar onSearch={onSearch}/>
            <Link to='/home'>
                <h3>HOME</h3>
            </Link>
            <Link to='/about'>
                <h3>ABOUT</h3>
            </Link>
        </nav>
    );
}