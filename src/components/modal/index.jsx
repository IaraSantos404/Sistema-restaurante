import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";

export default function Modal({ produto, onClose }) {
  // Caso não exista produto selecionado, o modal não renderiza
  if (!produto) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <img className="modal-img" src={produto.img} alt={produto.nome} />
        <h2>{produto.nome}</h2>
        <p>{produto.descricao}</p>
        <p className="modal-preco">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(produto.preco)}
        </p>
        <Link to="/carrinho"><button className="btn-adicionar">Adicionar ao Carrinho</button></Link>
        
      </div>
    </div>
  );
}


Modal.propTypes = {
  produto: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    descricao: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};
