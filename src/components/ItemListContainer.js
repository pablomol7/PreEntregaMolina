import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/Monitor"> 
                    {props.itemUno} 
                </Link>
            </li>
            <li>
                <Link to="category/CPU">
                    {props.itemDos}
                </Link>
            </li>
            <li>
                <Link to="category/Teclado">
                    {props.itemTres}
                </Link>
            </li>
            <li>
                <Link to="category/Mouse">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}
export default ItemListContainer;

