import "./style.css"
import Card from "../../components/cards-menu"
import Comida1 from "../../assets/images/image.png"

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
            nome={"pizza napolitana"}
            preco={9.99}
            descricao={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptas."}
            img={Comida1}/>
          <Card 
            nome={"pizza napolitana"}
            preco={9.99}
            descricao={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptas."}
            img={Comida1}/>
          <Card 
            nome={"pizza napolitana"}
            preco={9.99}
            descricao={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptas."}
            img={Comida1}/>
          <Card 
            nome={"pizza napolitana"}
            preco={9.99}
            descricao={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptas."}
            img={Comida1}/>
          <Card 
            nome={"pizza napolitana"}
            preco={9.99}
            descricao={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptas."}
            img={Comida1}/>
          <Card 
            nome={"pizza napolitana"}
            preco={9.99}
            descricao={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptas."}
            img={Comida1}/>
          
        </div>
      </div>
    
    </>
  )
}