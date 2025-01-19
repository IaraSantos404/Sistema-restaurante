import "./style.css";

export default function AdicionarProduto() {
    return (
        <>
            <div className="top">
                <img src="../../../public/icons/icon_voltar.png" alt="icone_voltar" />
                <h3>Adicionar Produto</h3>
            </div>

            <hr className="linha-separacao" />


            <div className="inputs-produto">
                <label for="file" class="custum-file-upload">
                    <div class="icon">
                        <img src="../../../public/icons/icon_add_img.png" alt="icon-add-img" />
                    </div>
                    <hr className="linha-separacao" />
                    <div class="text">
                        <span>Inserir imagem</span>
                    </div>
                    <input id="file" type="file" />
                </label>

                <span>
                    <input className="text" type="text" placeholder="Nome do Produto" />
                    <input className="text" type="number" placeholder="Preço" />
                    <div className="checkbox">
                        <h3>Disponibilidade</h3>
                        <div class="toggle-wrapper">
                            <input class="toggle-checkbox" type="checkbox" />
                            <div class="toggle-container">
                                <div class="toggle-button">
                                </div>
                            </div>
                        </div>
                    </div>
                    <textarea className="text-description" type="text" placeholder="Descrição" />
                </span>
            </div>
            <button className="button-add">Adicionar</button>
        </>
    )
}