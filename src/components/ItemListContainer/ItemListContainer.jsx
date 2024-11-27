import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import db from "../../data/db.js"
import "./itemlistcontainer.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

  const getProducts = () => {
    const productsRef = collection(db, "products")
    getDocs(productsRef)
      .then((dataDb)=> {
        const data = dataDb.docs.map((productDb)=> {
          return { id: productDb.id, ...productDb.data() }
        })

        setProducts(data)
      })
  }

  const getProductsByCategory = () => {
    const productsRef = collection(db, "products")
    const queryFilter = query( productsRef, where( "category", "==", idCategory ) )

    getDocs(queryFilter)
      .then((dataDb)=> {
        const data = dataDb.docs.map((productDb)=> {
          return { id: productDb.id, ...productDb.data() }
        })

        setProducts(data)
      })
  }

  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategory])


  return (
    <div className="itemlistcontainer">
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer