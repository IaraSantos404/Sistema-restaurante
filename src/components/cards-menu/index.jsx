import "./style.css";
import Edit from "../../assets/images/edit.svg"
import PropTypes from "prop-types";

Card.propTypes = {
  nome: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
  descricao: PropTypes.string,
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  dNone: PropTypes.string
};

export default function Card({ nome, preco, descricao, img, onClick, dNone }) {
  const formatarPreco = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  return (
    <div id="cards-container" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="box">
        <div className="box-img">
          <div className="edit">
            <img className={dNone} src={Edit} alt="" />
          </div>
          <img className="img-comida" src={img} alt={nome} />
        </div>
        <div className="box-text">
          <div className="div1">
            <p className="nome">{nome}</p>
            <p className="preco">{formatarPreco(preco)}</p>
          </div>
          <div className="div2">
            <p className="descricao">{descricao}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
