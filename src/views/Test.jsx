import { Link } from "react-router-dom";
import FlavorForm from "../components/FlavorForm";



function Test() {
  return (
    <div>
      

      <div>
            <h1>Formulario de sabores</h1>
            <FlavorForm />
        </div> 

      




      <div className="buttonContainer">
          <Link to="/home" className="linkButton linkButton-home">Regresar</Link>
      </div>


    </div>

    
  );
}

export default Test;
