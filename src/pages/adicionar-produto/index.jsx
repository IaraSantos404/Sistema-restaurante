import PropTypes from "prop-types";
import "./style.css";

AdicionarProduto.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default function AdicionarProduto({onClose}) {
    return (
        <>
            <div className="top">
                <img src="../../../public/icons/icon_voltar.png" onClick={onClose} alt="icone_voltar" />
                <h3>Adicionar Produto</h3>
            </div>

            <hr className="linha-separacao" />

            <div className="inputs-produto">
                <label htmlFor="file" className="custum-file-upload">
                    <div className="icon">
                        <img src="../../../public/icons/icon_add_img.png" alt="icon-add-img" />
                    </div>
                    <hr className="linha-separacao" />
                    <div className="text">
                        <span>Inserir imagem</span>
                    </div>
                    <input id="file" type="file" />
                </label>

                <span className="container-inputs">
                    <input className="text" type="text" placeholder="Nome do Produto" />
                    <input className="text" type="number" placeholder="Preço" />

                    <select className="text" id="categoria" name="categoria" required>
                        <option value="" disabled selected>Categoria</option>
                        <option value="pizza">Pizza</option>
                        <option value="entrada">Entrada</option>
                        <option value="drink">Drink</option>
                    </select>

                    <div className="checkbox">
                        <h3>Disponibilidade</h3>
                        <div className="toggle-wrapper">
                            <input className="toggle-checkbox" type="checkbox" />
                            <div className="toggle-container">
                                <div className="toggle-button">
                                </div>
                            </div>
                        </div>
                    </div>
                    <textarea className="text-description" type="text" placeholder="Descrição" />
                </span>
            </div>


            <button type="submit" className="button-add">Adicionar</button>
        </>
    )
}