import "./style.css";

export default function DetalhesDoProduto() {
    return (
        <>
            <div className="detalhes-do-produto">
                <div className="top">
                    <img src="../../../public/icons/icon_voltar.png" alt="icone_voltar" />
                    <h3>Detalhes do produto</h3>
                </div>

                <hr className="linha-separacao" />

                <div className="info-produto">
                    <img src="../../../public/imagem-produto.png" alt="imagem_produto" />
                    <span>
                        <h3>Pizza napolitana</h3>
                        <h3 style={{color:"#AD343E"}}>$9.99</h3>
                        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    </span>
                </div>
                <textarea type="text" placeholder="EX.: Retirar cebola, etc"/>


                <div className="botoes-edicao">
                    <div className="botton-buttons">
                        <div className="quantidade">
                            <button><img src="../../../public/icons/icon_menos.png" alt="icon-lixeira" style={{height: "30px"}} /></button>
                            <h2>1</h2>
                            <button><img src="../../../public/icons/icon_add.png" alt="icon-lixeira" /></button>
                        </div>

                        <button className="editar-produto">
                            <span>Editar item</span>
                            <span>R$9.99</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}