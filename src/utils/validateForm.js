import { object, string, mixed } from "yup"

let userSchema = object({
  fullname: string().required("¡Por favor, ingrese su nombre!"),
  phone: mixed().required("¡Por favor, ingrese su teléfono!"),
  email: string().email("el campo email no tiene el formato correcto").required("¡Por favor, ingrese su email!")
})

const validateForm = async(dataForm) => {

  try{
    await userSchema.validate(dataForm)
    return { status: "success" }
  }catch(error){
    return { status: "error", message: error.message }
  }

}

export default validateForm