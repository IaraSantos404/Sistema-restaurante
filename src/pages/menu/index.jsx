import "./style.css"
import Card from "../../components/cards-menu"
import Pizza1 from "../../assets/images/pizza1.png"
import Pizza2 from "../../assets/images/pizza2.svg"
import Salada from "../../assets/images/salada.png"
import Macarrao from "../../assets/images/macarrao.png"
import Drink1 from "../../assets/images/drink1.png"
import Drink2 from "../../assets/images/drink2.png"

export default function Menu(){
  return(
    <>
      <div id="menu-container">
        <h1>Nosso menu</h1>
        
        <div className="opcoes-menu">
          <p className="selecionado">Tudo</p>
          <p>Drinks</p>
          <p>Entradas</p>
          <p>Pizzas</p>
        </div>
        <div className="div-cards">
          <Card 
            nome={"Pizza Vegetariana"}
            preco={35}
            descricao={"Cobertura de vegetais frescos, queijo derretido e molho de tomate especial."}
            img={Pizza1}/>
          <Card 
            nome={"Penne ao Pesto"}
            preco={15.50}
            descricao={"Massa penne com molho pesto de manjericão, tomatinhos cereja e parmesão."}
            img={Salada}/>
          <Card 
            nome={"Macarrão Alfredo"}
            preco={23}
            descricao={"Massa fettuccine ao molho cremoso de queijo parmesão e manteiga."}
            img={Macarrao}/>
          <Card 
            nome={"Água de Limão"}
            preco={7.5}
            descricao={"Bebida leve com rodelas de limão, folhas de hortelã e frutas vermelhas."}
            img={Drink1}/>
          <Card 
            nome={"Pizza Margherita"}
            preco={28}
            descricao={"Cobertura de molho de tomate, queijo mozzarella fresco e manjericão."}
            img={Pizza2}/>
          <Card 
            nome={"Drink Tropical"}
            preco={15}
            descricao={"Coquetel com toque de hortelã, limão e leve dulçor tropical."}
            img={Drink2}/>
          
        </div>
      </div>
    
    </>
  )
}