import "./style.css";

export default function ProdutoNoCarrinho(){
    return(
        <>
            <div className="produto-no-carrinho">
                <div className="produto">
                    <button><img src="../../../public/icons/icon_edit.png" alt="icon_edit" />
                    </button>
                    <img className="imagem-produto" src="../../../public/imagem-produto.png" alt="imagem-produto" />
                    <span>
                        <h2>Pizza Napolitana</h2>
                        <h2 style={{color:"#AD343E"}}>R$9.99</h2>
                    </span>
                </div>

                <div className="quantidade">
                    <button><img src="../../../public/icons/icon_lixeira.png" alt="icon-lixeira" /></button>
                    <h2>1</h2>
                    <button><img src="../../../public/icons/icon_add.png" alt="icon-lixeira" /></button>
                </div>
            </div>
        </>
    )
}