export const products = [
    {
        /*id: '01',
        name: 'Alimento Cat Chow Gato Adulto',
        price: 12000,
        description: 'Alimento para Gato Adulto sabor Pescado y Pollo marca Cat Chow 3kg',
        stock: 5,
        img: 'https://i.postimg.cc/1th0yvBv/Screenshot-1.jpg',
        category: 'alimentos'*/
    },
    {
        //id: '02',
        name: 'Alimento Cat Chow Gato Cachorro',
        price: 11000,
        description: 'Alimento para Gato Cachorro sabor Pescado, Carne y Vegetales marca Cat Chow',
        stock: 3,
        img: 'https://i.postimg.cc/vBrrT5Sb/Screenshot-2.jpg',
        category: 'alimentos'
    },
    {
        //id: '03',
        name: 'Alimento Cat Whiskas Adulto',
        price: 21000,
        description: 'Alimento para Gato Adulto sabor Carne marca Whiskas',
        stock: 7,
        img: 'https://i.postimg.cc/QCyysHNQ/Screenshot-3.jpg',
        category: 'alimentos'
    },
    {
        //id: '04',
        name: 'Alimento Cat Whiskas Cachorro',
        price: 20500,
        description: 'Alimento para Gato Cachorro sabor Carne y Leche marca Whiskas',
        stock: 4,
        img: 'https://i.postimg.cc/L4C7j0kJ/Screenshot-4.jpg',
        category: 'alimentos'
    },
    {
        //id: '05',
        name: 'Hueso para Perro 9/10',
        price: 4500,
        description: 'Hueso para Perro 9/10',
        stock: 20,
        img: 'https://i.postimg.cc/C16hft3H/Screenshot-5.jpg',
        category: 'accesorios'
    },
    {
        //id: '06',
        name: 'Piedras aglomerantes Stone Cat 4kg',
        price: 10000,
        description: 'Piedras Aglomerantes Snote 4k aroma Limón',
        stock: 9,
        img: 'https://i.postimg.cc/sxQVPmyF/Screenshot-6.jpg',
        category: 'higiene'
    }
]

//funcion que retorna una promesa que cuando se resuelva devuelva el Array de Productos
let error = false
export const getProducts = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!error){
                resolve(products)
            }
            else{
                reject("Hubo un error. Intente mas tarde")
            }
        }, 3000)
    })
}

export const getOneProduct = (id) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!error){
                let oneProduct = products.find((item) => item.id === id)
                resolve(oneProduct)
            }
            else{
                reject("Hubo un error. Intente mas tarde")
            }
        }, 3000)
    })
}