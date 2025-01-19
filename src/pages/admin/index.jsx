import "./style.css";
// import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import Card from "../../components/cards-menu";
import DetalhesDoProduto from "../detalhes-do-produto";
import AdicionarProduto from "../adicionar-produto";
import Footer from "../footer";

import Pizza1 from "../../assets/images/pizza1.png";
import Pizza2 from "../../assets/images/pizza2.svg";
import Salada from "../../assets/images/salada.png";
import Macarrao from "../../assets/images/macarrao.png";
import Drink1 from "../../assets/images/drink1.png";
import Drink2 from "../../assets/images/drink2.png";

export default function Admin() {
  const [selectedCategory, setSelectedCategory] = useState("Tudo");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false); // Estado para controlar o modal

  const items = [
    {
      nome: "Pizza Vegetariana",
      preco: 35,
      descricao: "Cobertura de vegetais frescos, queijo derretido e molho de tomate especial.",
      img: Pizza1,
      categoria: "Pizzas",
    },
    {
      nome: "Penne ao Pesto",
      preco: 15.5,
      descricao: "Massa penne com molho pesto de manjericão, tomatinhos cereja e parmesão.",
      img: Salada,
      categoria: "Entradas",
    },
    {
      nome: "Macarrão Alfredo",
      preco: 23,
      descricao: "Massa fettuccine ao molho cremoso de queijo parmesão e manteiga.",
      img: Macarrao,
      categoria: "Entradas",
    },
    {
      nome: "Água de Limão",
      preco: 7.5,
      descricao: "Bebida leve com rodelas de limão, folhas de hortelã e frutas vermelhas.",
      img: Drink1,
      categoria: "Drinks",
    },
    {
      nome: "Pizza Margherita",
      preco: 28,
      descricao: "Cobertura de molho de tomate, queijo mozzarella fresco e manjericão.",
      img: Pizza2,
      categoria: "Pizzas",
    },
    {
      nome: "Drink Tropical",
      preco: 15,
      descricao: "Coquetel com toque de hortelã, limão e leve dulçor tropical.",
      img: Drink2,
      categoria: "Drinks",
    },
  ];

  const filteredItems =
    selectedCategory === "Tudo"
      ? items
      : items.filter((item) => item.categoria === selectedCategory);
  return (
    <>
      {/* Home */}
      <div className="nav-bar" id="nav-bar">
        <img src="../../../public/icons/logo.png" alt="icon-twitter" />

        <div style={{ margin: 'auto', display: 'flex', gap: '3em' }} className="nav-buttons" id="nav-buttons">
          <button><a href="#home">Home</a></button>
          <button ><a href="#sobre">Sobre</a> </button>
          <button><a href="#menu">Menu</a> </button>
        </div>
      </div>

      <div className="home" id="home">
        <h1>Sinta o sabor da Itália<br />em cada pedaço</h1>
        <h3>A verdadeira cozinha italiana, feita com paixão</h3>
      </div>

      {/* Menu */}
      <div id="menu">
        <h1>Nosso menu</h1>
        <div className="opcoes-menu">
          {["Tudo", "Drinks", "Entradas", "Pizzas"].map((categoria) => (
            <p
              key={categoria}
              className={selectedCategory === categoria ? "selecionado" : ""}
              onClick={() => setSelectedCategory(categoria)}
            >
              {categoria}
            </p>
          ))}
        </div>
        <div className="div-cards">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              nome={item.nome}
              preco={item.preco}
              descricao={item.descricao}
              img={item.img}
              onClick={() => setSelectedProduct(item)}
            />
          ))}
        </div>
      </div>

      {/* Modal para exibir detalhes do produto */}
      {selectedProduct && (
        <div className="modal-overlay">
          <DetalhesDoProduto
            produto={selectedProduct}
            onClose={() => setSelectedProduct(null)} // Fecha o modal
          />
        </div>
      )}

      {/* Botão para abrir o modal */}
      <button className="adicionar-admin" onClick={() => setShowModal(true)}>
        Adicionar Produto
      </button>

      {/* Modal de adicionar produto */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AdicionarProduto onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}
      <Footer />

    </>
  )
}