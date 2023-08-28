import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import styles from './Detail.module.css'; // Importa los estilos
import {Link} from "react-router-dom";

function Detail() {
  const [character, setCharacter] = useState({});

  const {id} = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
    //eslint-disable-next-line
  }, []);

  return (
    <div className={styles.detailContainer}>
        <div className={styles.characterInfo}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
        </div>
        <div>
            <div className={styles.characterDetail}>
                <h3>Species:</h3>
                <p>{character.species}</p>
            </div>
            <div className={styles.characterDetail}>
                <h3>Gender:</h3>
                <p>{character.gender}</p>
            </div>
            <div className={styles.characterDetail}>
                <h3>Status:</h3>
                <p>{character.status}</p>
            </div>
            <div className={styles.characterDetail}>
                <h3>Origin:</h3>
                <p>{character.origin?.name}</p>
            </div>
            <div className={styles.characterDetail}>
                <h3>Location:</h3>
                <p>{character.location?.name}</p>
            </div>
        </div>

        <div className="buttonContainer">
          <Link to="/home" className="linkButton linkButton-home">Regresar</Link>
        </div>

    </div>
    
);
}

export default Detail;
