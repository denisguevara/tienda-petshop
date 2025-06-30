import { useEffect, useState } from "react"
import { getProducts, products} from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"


const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(false)
    
    //firebase
    useEffect(() => {
        setLoading(true)
        //conectarnos con nuestra coleccion
        const productsCollection = categoryId ? query(collection(db,"productos"), where("category","==", categoryId)): collection(db, "productos")
        //pedir los documentos
        getDocs(productsCollection)
        .then((res) => {
            //limpiar los datos para poder utilizar
            const list = res.docs.map((doc)=>{
                return{
                    ...doc.data(),
                    id:doc.id
                }
            })
            setData(list)
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    },[categoryId])

    
    
    //ejecutar mi funcion promesa
    //como es un llamado a una api, vamos a ejecutarlo una sola vez
    
    /*useEffect(() => {
        setLoading(true)
        getProducts()
        .then((respuesta) => {
            if(categoryId){
                //filtrar
                setData(respuesta.filter((prod) => prod.category === categoryId))
            }
            else{
                //no filtro
                setData(respuesta)
            }
        })
        .catch((error) => console.error(error))
        .finally(()=>setLoading(false))
    }, [categoryId])*/
    
    /*const subirData = () => {
        console.log("subiendo data...")
        const prodCollection = collection(db, "productos")
        products.map((item) => addDoc(prodCollection, item))
    }*/

    return(
        //la key va en el elemento que el map retorna
        <>
            {loading ? <LoaderComponent/>
                :<div>
                    {/*<button onClick={subirData}>Subir data</button>*/}
                    <h2>{greeting}{categoryId && <span style={{textTransform: "capitalize"}}>{categoryId}</span>}</h2>
                    {/*data.map((prod)=><p key={prod.id}>{prod.name}</p>)*/}
                    <ItemList data={data}/>
                </div>
            }
        </>
    )
}
export default ItemListContainer