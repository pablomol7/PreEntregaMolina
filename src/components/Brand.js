import brand from "../../img/brand.svg";
import { Link } from "reac-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Tienda" title="tienda"></img>
        </Link>
    )
}

export default Brand;
