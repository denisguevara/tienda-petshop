import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([])
    const {categoryId} = useParams()
    //ejecutar mi funcion promesa
    //como es un llamado a una api, vamos a ejecutarlo una sola vez
    useEffect(() => {
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
    }, [categoryId])
    console.log(data)
    return(
        //la key va en el elemento que el map retorna
        <div>
            <h2>{greeting}{categoryId && <span style={{textTransform: "capitalize"}}>{categoryId}</span>}</h2>
            {/*data.map((prod)=><p key={prod.id}>{prod.name}</p>)*/}
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer