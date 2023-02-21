import Image from "./image";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetails from "./ButtonDetails";
import ButtonAddCart from "./ButtonAddCart";
import ImgPrueba from "../../img/prueba.svg"

const CardItem = () => {
    return(
        <div className="cardItem">
            <Image image= {ImgPrueba} />
            <Description
                title="Descripcion de prueba"
                cantidad= {5}
                precio= {2000}
                 />
            <div className="buttons">
                <ButtonDetails />
                <ButtonAddCart />
            </div>
        </div>
    )
}

export default CardItem;
