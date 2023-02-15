import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className= "containerBrand">
                <Brand />
            </div>

            <nav className="containerItemList">
                <ItemListContainer
                     itemUno = "Monitor"
                     itemDos = "CPU"
                     ItemTres = "Teclado"
                     ItemCuatro = "Mouse"
                />

            </nav>

            <div className="containerCart">
                <CartWidget />
            </div>

        </header>
  
    )
}

export default NavBar;