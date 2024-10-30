import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

  useEffect(() => {
    getProducts()
      .then((data) => {
        if(idCategory){
          //filtrar la data por esa categoria
          const productsFilter = data.filter( (product) => product.category === idCategory )
          setProducts(productsFilter)
        }else{
          //guardamos todos los productos
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        console.log("Finalizo la promesa")
      })
  }, [idCategory])


  return (
    <div className="itemlistcontainer">
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer