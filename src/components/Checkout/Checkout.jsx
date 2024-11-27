import { useState, useContext } from "react"
import { cartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../data/db.js"
import { Link } from "react-router-dom"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"
import "./checkout.css"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  })
  const [idOrder, setIdOrder] = useState(null)
  const { cart, totalPrice, deleteCart } = useContext(cartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice()
    }
    
    //antes de subir la orden, validamos los datos del formulario
    const response = await validateForm(dataForm)
    if(response.status === "success"){
      uploadOrder(order)
    }else{
      toast.error(response.message)
    }
  }

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
      .then((response) => {
        setIdOrder(response.id)
      })
      .finally(() => {
        //una vez generada la orden, vaciamos nuestro carrito
        deleteCart()
        toast.success("orden generada correctamente!")
      })
  }

  return (
    <div className="container">

    <div className="checkout">
      {
        idOrder === null ? (
          <form onSubmit={handleSubmitForm} className="form-checkout" >
            <h2>Checkout</h2>
            <div className="content-input">
              <label className="label">Nombre completo: </label>
              <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />
            </div>

            <div className="content-input">
              <label className="label">Telefono:</label>
              <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />
            </div>

            <div className="content-input">
              <label className="label">Email:</label>
              <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
            </div>
            
            <button type="submit" className="button-send-order">Enviar orden</button>
          </form>
        ) : (
          <div>
            <h2>¡Orden generada correctamente! 😁</h2>
            <p>Le recomendamos que guarde su nro de orden: {idOrder}</p>
            <Link to="/" className="button-to-home">Volver al inicio</Link>
          </div>
        )
      }

    </div>
    </div>
  )
}
export default Checkout