import "./style.css";
import { Link } from "react-router-dom";

export default function Carrinho() {
    return (
        <>
            <div className="carrinho">
                <div className="top">
                    <Link to="/"><img src="../../../public/icons/icon_voltar.png" alt="icone_voltar" /></Link>
                    
                    <h3>Carrinho</h3>
                </div>

                <hr className="linha-separacao" />

                <button className="add-produto">Adicionar produtos</button>

                <div className="botao-avancar">
                    <button className="avancar-produto">
                        <span>Avançar</span>
                        <span>R$9.99</span>
                    </button>
                </div>
            </div>
        </>
    )
}