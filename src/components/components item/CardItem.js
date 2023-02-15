import Image from "./image";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetails from "./ButtonDetails";
import ButtonAddCart from "./ButtonAddCart";

const CardItem = () => {
    return(
        <div className="cardItem">
            <Image />
            <Description />
            <div className="buttons">
                <ButtonDetails />
                <ButtonAddCart />
            </div>
        </div>
    )
}

export default CardItem;
