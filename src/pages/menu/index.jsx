import { useState } from "react";
import "./style.css";
import Card from "../../components/cards-menu";
import Modal from "../../components/modal";
import Pizza1 from "../../assets/images/pizza1.png";
import Pizza2 from "../../assets/images/pizza2.svg";
import Salada from "../../assets/images/salada.png";
import Macarrao from "../../assets/images/macarrao.png";
import Drink1 from "../../assets/images/drink1.png";
import Drink2 from "../../assets/images/drink2.png";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Tudo");
  const [selectedProduct, setSelectedProduct] = useState(null);

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
              onClick={() => setSelectedProduct(item)} // Define o produto selecionado
            />
          ))}
        </div>
      </div>

      {/* Exibe o modal se houver um produto selecionado */}
      <Modal produto={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
