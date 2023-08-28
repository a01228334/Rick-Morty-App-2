import {useNavigate} from "react-router-dom";
import "./styles.css"

export default function Card(props) {
  const navigate = useNavigate();
  const {name, species, gender, image, onClose, id} = props;

  function navigateHandler() {
    navigate(`/detail/${id}`);
  }

  return (
    <div className="cardContainer">
      
      <button className="closeButton" onClick={() => { onClose(id); }}> X </button>
      
      <h2>Name: {name}</h2>
      
      <h2>Species: {species}</h2>
      
      <h2>Gender: {gender}</h2>

      <img src={image} alt={name} onClick={navigateHandler} />

    </div>
  );
}
