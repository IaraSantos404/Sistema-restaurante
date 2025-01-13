import "./style.css"
import imgSobre from "../../assets/images/img-sobre.png"

export default function Sobre() {
  return (
    <>
      <div className="sobre-container">
        <div className="div-image-sobre">
          <img src={imgSobre} alt="" />
        </div>
        <div className="text-sobre">
          <h3>
            We provide healthy food for your family.
          </h3>
          <p className="p1">
            Our story began with a vision to create a unique dining
            experience that merges fine dining, exceptional service, and a vibrant ambiance.
            Rooted in city is rich culinary culture, we aim to honor our local roots while infusing a global palate.
          </p>
          <p className="p2">
          At place, we believe that dining is not just about food, but also about the overall experience. Our staff,
          renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>
        </div>

      </div>
    </>
  )
}