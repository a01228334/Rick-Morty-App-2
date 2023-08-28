import { Link } from "react-router-dom";

function MyAccount({ email }) {
    console.log("Correo recibido:", email);
  return (
    <div>
      <div>
        <h2>Correo: {email}</h2>
        <h2>Contraseña: ******** </h2>
      </div>

      <div className="buttonContainer">
        <Link to="/home" className="linkButton linkButton-home">Regresar</Link>
        <Link to="/" className="linkButton linkButton-home">Log Out</Link>
      </div>
    </div>
  );
}

export default MyAccount;
