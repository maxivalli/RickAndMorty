import style from './About.module.css';
import foto from '../../Assets/perfil.png';

export default function About() {
    return (
        <div className={style.about}>
            <h3>Un poco sobre mi</h3>
            <div className={style.texto}>
            <img src={foto} alt="Descripción de la imagen" />
                <h2>Maxi Valli</h2>
                <h4>
                    Tengo 38 años y soy de la provincia de Santa Fe,<br>
                </br>
                    empecé este año a estudiar en Henry porque tenía ganas de aprender programación.<br>
                </br>
                <br>
                </br>
                    Hasta ahora la expericia es genial y esta página fue construída con todo lo que aprendí.
                </h4>
            </div>
        </div>

    );
}