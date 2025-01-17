import "./style.css"
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <>
      <Link to="/">
        <img className="arrow" src="../src/assets/images/arrow.svg" alt="seta apontando para a esquerda" />
      </Link>

      <div className="login-container">
        <div className="logo">
          <img src={Logo} alt="Taste Italy Logo" />
        </div>
        <form className="login-form">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="Digite seu e-mail" required />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" placeholder="Digite sua senha" required />
          <p>Não tem uma conta? <Link to="/cadastro"><a href="">Cadastre-se</a></Link> </p>
          <div className="button-group">

            <button type="submit" className="btn login">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  )
}