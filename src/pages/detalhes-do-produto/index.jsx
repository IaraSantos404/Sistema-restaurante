import "./style.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

DetalhesDoProduto.propTypes = {
    produto: PropTypes.shape({
        nome: PropTypes.string.isRequired,
        preco: PropTypes.number.isRequired,
        descricao: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default function DetalhesDoProduto({ produto, onClose }) {
    const [quantidade, setQuantidade] = useState(1);

    // Função para aumentar a quantidade
    const aumentarQuantidade = () => {
        setQuantidade((prevQuantidade) => prevQuantidade + 1);
    };

    // Função para diminuir a quantidade
    const diminuirQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade((prevQuantidade) => prevQuantidade - 1);
        }
    };

    const calcularPrecoTotal = () => {
        return produto.preco * quantidade;
    };
    const formatarPreco = (valor) =>
        new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valor);

    return (
        <div className="detalhes-do-produto">
            <div className="top">
                <img
                    src="../../../public/icons/icon_voltar.png"
                    alt="icone_voltar"
                    onClick={onClose}
                    style={{ cursor: "pointer" }}
                />
                <h3>Detalhes do produto</h3>
            </div>

            <hr className="linha-separacao" />

            <div className="info-produto">
                <img src={produto.img} alt={produto.nome} />
                <span>
                    <h3 className="produto-nome">{produto.nome}</h3>
                    <h3 style={{ color: "#AD343E" }}>{formatarPreco(produto.preco)}</h3>
                    <h3>{produto.descricao}</h3>
                </span>
            </div>
            <textarea type="text" placeholder="EX.: Retirar cebola, etc" />

            <div className="botoes-edicao">
                <div className="botton-buttons">
                    <div className="quantidade">
                        <button onClick={diminuirQuantidade}>
                            {/* <img src="../../../public/icons/icon_menos.png" alt="icon-menos" style={{ height: "30px" }} /> */}
                            <p>-</p>
                        </button>
                        <h2>{quantidade}</h2>
                        <button onClick={aumentarQuantidade}>
                            <p>+</p>
                            {/* <img src="../../../public/icons/icon_add.png" alt="icon-add" /> */}
                        </button>
                    </div>

                    <button className="editar-produto">
                        <Link to="/carrinho">
                            <span>Adicionar ao carrinho</span>
                        </Link>

                        <span>{formatarPreco(calcularPrecoTotal())}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
