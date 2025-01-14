import "./style.css"

export default function Login(){
  return(
    <>
      <div className="login-container">
      <div className="logo">
        <img src="../src/assets/logo.png" alt="Taste Italy Logo" />
      </div>
      <form className="login-form">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" placeholder="Digite seu e-mail" required />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" placeholder="Digite sua senha" required />
        <div className="button-group">
          <button type="button" className="btn register">
            Registrar
          </button>
          <button type="submit" className="btn login">
            Entrar
          </button>
        </div>
      </form>
    </div>
    </>
  )
}