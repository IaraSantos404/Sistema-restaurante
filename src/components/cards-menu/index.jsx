import "./style.css"
// import Heart from "../../assets/images/heart.svg"
import PropTypes from "prop-types";

Card.propTypes = {
  nome: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired, 
  descricao: PropTypes.string,        
  img: PropTypes.string.isRequired    
};

export default function Card({nome, preco, descricao, img}){
  const formatarPreco = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  return(
    <>
      <div id="cards-container">
        <div className="box">
          <div className="box-img">
            {/* <div className="heart">
              <img src={Heart} alt="" />
            </div> */}
            
            <img className="img-comida" src={img} alt="" />
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
    </>
  )
}