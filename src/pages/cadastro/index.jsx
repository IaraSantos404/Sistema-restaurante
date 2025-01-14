import "./style.css"

export default function Cadastro(){
  return(
    <>
      <div className="cadastro-container">
      <div className="logo">
        <img src="../src/assets/logo.png" alt="Taste Italy Logo" />
      </div>
      <form className="cadastro-form">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          placeholder="Digite seu nome"
          required
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          required
        />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          required
        />

        <label htmlFor="confirmarSenha">Confirmar Senha:</label>
        <input
          type="password"
          id="confirmarSenha"
          placeholder="Confirme sua senha"
          required
        />

        <button type="submit" className="btn registrar">
          Registrar
        </button>
      </form>
    </div>
    </>
  )
}