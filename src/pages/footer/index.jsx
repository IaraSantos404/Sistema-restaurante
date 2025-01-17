import "./style.css"
import { Link } from "react-router-dom"

import Logo from '../../../public/icons/logo.png'
import Github from "../../../public/icons/github.png"
import Instagram from "../../../public/icons/instagram.png"
import Facebook from "../../../public/icons/facebook.png"
import Twitter from "../../../public/icons/twitter.png"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="div1-footer">
            <div className="logo-footer">
              <img src={Logo} alt="" />
            </div>
            <div className="text">
              <p>O Taste Italy é mais do que um restaurante, é uma experiência gastronômica
                que transporta você para o coração da Itália. Sabores autênticos, ingredientes frescos
                e uma pitada de amor em cada prato. Venha nos visitar e descubra o verdadeiro gosto italiano!</p>
            </div>
            <div className="social-footer">
              <a href="#sobre"><div><img src={Twitter} alt="logo twitter" /></div></a>

              <div><img src={Facebook} alt="logo facebook" /></div>
              <div><img src={Instagram} alt="logo instagram" /></div>
              <div><img src={Github} alt="logo github" /></div>
            </div>

          </div>
          <div className="div2-footer">
            <h3>Pages</h3>
            <ul>
              <a href="#home"><li>Home</li></a>
              <a href="#sobre"><li>Sobre</li></a>
              <a href="#menu"><li>Menu</li></a>
              <Link to="/login"><a><li>Login</li></a></Link>
              <Link to="/cadastro"><a><li>Cadastro</li></a>  </Link>
            </ul>
          </div>
          <div className="div3-footer">
            <h3>Contato</h3>
            <div className="info-footer">
              <p>Telefone: (99)12345678</p>
              <p>Email: include@gmail.com</p>
              <p>Localização: Rua do horizonte</p>
            </div>

          </div>
        </div>

      </footer>
    </>
  )
}