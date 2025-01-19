import "./style.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* <div className="top-home" id="top-home">
        <span className="contatos">
          <h4><img src="../../../public/icons/icon_phone.png" alt="icon-twitter" />(414) 857 - 0107</h4>
          <h4><img src="../../../public/icons/icon_email.png" alt="icon-twitter" />yummy@bistrobliss</h4>
        </span>

        <span className="redes-sociais">
          <a href="" target="_blank">
            <img src="../../../public/icons/icon_twitter.png" alt="icon-twitter" />
          </a>
          <a href="" target="_blank">
            <img src="../../../public/icons/icon_facebook.png" alt="icon-facebook" />
          </a>
          <a href="" target="_blank">
            <img src="../../../public/icons/icon_instagram.png" alt="icon-twitter" />
          </a>
          <a href="" target="_blank">
            <img src="../../../public/icons/icon_github.png" alt="icon-twitter" />
          </a>
        </span>
      </div> */}

      <div className="nav-bar" id="nav-bar">
        <img src="../../../public/icons/logo.png" alt="icon-twitter" />

        <div className="nav-buttons" id="nav-buttons">
          <button><a href="#home">Home</a></button>
          <button><a href="#sobre">Sobre</a> </button>
          <button><a href="#menu">Menu</a> </button>
          <Link to="carrinho"><button>Carrinho</button></Link>
          
        </div>

        <div className="auth" id="auth">
          <Link to='/login'>
            <button className="button1">Login</button>
          </Link>

          <Link to="/cadastro">
            <button className="button2">Cadastro</button>
          </Link>
        </div>

      </div>

      <div className="home" id="home">
        <h1>Sinta o sabor da Itália<br />em cada pedaço</h1>
        <h3>A verdadeira cozinha italiana, feita com paixão</h3>
      </div>
    </>
  )
}