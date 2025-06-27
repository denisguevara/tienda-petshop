import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(false)
    //ejecutar mi funcion promesa
    //como es un llamado a una api, vamos a ejecutarlo una sola vez
    useEffect(() => {
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
    }, [categoryId])
    console.log(data)
    return(
        //la key va en el elemento que el map retorna
        <>
            {loading ? <LoaderComponent/>
                :<div>
                    <h2>{greeting}{categoryId && <span style={{textTransform: "capitalize"}}>{categoryId}</span>}</h2>
                    {/*data.map((prod)=><p key={prod.id}>{prod.name}</p>)*/}
                    <ItemList data={data}/>
                </div>
            }
        </>
    )
}
export default ItemListContainer