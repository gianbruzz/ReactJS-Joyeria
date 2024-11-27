import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { cartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./itemdetail.css"

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true)
  const { addProductInCart } = useContext(cartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }

    addProductInCart(productCart)
    //cambiamos el estado para poder ocultar ItemCount
    setShowItemCount(false)
  }

  return (
    <div className="item-detail">
      <div className="images-detail-container">
          <img src={product.image} alt="" />
      </div>

      <div className="text-detail-container">
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-detail">Precio: ${product.price}</p>

        {
          //Renderizado condicional con un ternario
          showItemCount === true ?
            (<ItemCount stock={product.stock} addProduct={addProduct} />)
            :
            (<Link to="/cart" className="button-end-buy">Terminar mi compra</Link>)
        }

      </div>
    </div>
  )
}
export default ItemDetail