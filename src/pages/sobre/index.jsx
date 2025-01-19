import "./style.css"
import imgSobre from "../../assets/images/img-sobre.png"

export default function Sobre() {
  return (
    <>
      <section id="sobre">
        <div className="sobre-container">
          <div className="div-image-sobre">
            <img src={imgSobre} alt="" />
          </div>
          <div className="text-sobre">
            <h3>
              Experimente o verdadeiro sabor da Itália.
            </h3>
            <p className="p1">
              Nossa jornada começou com uma paixão pela culinária italiana tradicional
              e um desejo de oferecer uma atmosfera acolhedora e familiar. De massas caseiras
              a pizzas assadas no forno a lenha, cada prato é feito com amor e ingredientes frescos.
            </p>
            <p className="p2">
              Descubra a arte da gastronomia italiana, onde cada prato é uma obra-prima, e cada visita
              é um convite para experimentar o calor, a tradição e a paixão de nossas raízes culinárias.
            </p>
          </div>

        </div>
      </section>

    </>
  )
}