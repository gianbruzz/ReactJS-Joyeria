import { createContext, useState } from "react";

//creamos un contexto para el carrito
const cartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addProductInCart = (newProduct) => {
    //comprobar si el producto nuevo ya esta en el carrito
    const tempCart = [...cart]
    const indexProduct = cart.findIndex( (productCart)=> productCart.id === newProduct.id )

    if(indexProduct >= 0){
      //sumar cantidades
      tempCart[indexProduct].quantity = tempCart[indexProduct].quantity + newProduct.quantity

      setCart(tempCart)
    }else{
      //agregar como producto nuevo
      setCart( [ ...cart, newProduct ] )
    }
  }

  const deleteProductById = (idProduct) => {
    const productsFilter = cart.filter( (productCart)=> productCart.id !== idProduct )
    setCart(productsFilter)
  }

  const deleteCart = () => {
    setCart([])
  }

  const totalQuantity = () => {
    const quantity = cart.reduce( (total, productCart)=> total + productCart.quantity, 0 )
    return quantity
  }

  const totalPrice = () => {
    const price = cart.reduce( (total, productCart)=> total + ( productCart.quantity * productCart.price ), 0 )
    return price
  }

  return(
    <cartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart } } >
      {children}
    </cartContext.Provider>
  )
}

export { cartContext, CartProvider }