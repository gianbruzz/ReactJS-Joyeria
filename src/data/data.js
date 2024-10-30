const products = [
  {
    id: "1",
    name: "Anillo 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 400,
    stock: 10,
    image: "/img/ring2-1.png",
    category: "anillos"
  },
  {
    id: "2",
    name: "Anillo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 420,
    stock: 4,
    image: "/img/ring7.png",
    category: "anillos"
  },
  {
    id: "3",
    name: "Pulsera 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 720,
    stock: 5,
    image: "/img/pulsera1.png",
    category: "pulseras"
  },
  {
    id: "4",
    name: "Pulsera 2 ",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 620,
    stock: 17,
    image: "/img/pulsera2.png",
    category: "pulseras"
  },
  {
    id: "5",
    name: "Aro 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 800,
    stock: 2,
    image: "/img/aro8.png",
    category: "aros"
  },
  {
    id: "6",
    name: "Aro 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 820,
    stock: 6,
    image: "/img/aro9.png",
    category: "aros"
  },
  {
    id: "7",
    name: "Cadena 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 820,
    stock: 6,
    image: "/img/cadena9.png",
    category: "cadenas"
  },
  {
    id: "8",
    name: "Cadena 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
    price: 820,
    stock: 6,
    image: "/img/cadena10.png",
    category: "cadenas"
  },
]

//Obtener productos
const getProducts = () => {
  return new Promise((resolve, reject) => {
    //Simulamos un retraso de red
    setTimeout( ()=>{
      resolve(products)
    }, 2000 )
  })
}

export { getProducts }