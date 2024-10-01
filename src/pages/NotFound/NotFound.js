import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="card-not-found">
        <h1 className="error-found">404</h1>
        <h2 className="text-not-found">
          Ops! Parece que você tentou acessar um endereço inválido dentro desse domínio. Retorne à home para ver mais conteudos sobre programação!
        </h2>
        <Link to="/" className="return-home">
          Voltar para Home...
        </Link>
      </div>
    </div>
  );
}

export default NotFound;