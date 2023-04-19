import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch'])    

  const onAddCactegory = (newCategory) =>{
    console.log(newCategory)
    //setCategories([...categories, 'Hola mundo'])
    setCategories( cat => [...cat, newCategory])
  } 

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
          //onAddCategory={ setCategories }
          onNewCategory = { event => onAddCactegory(event)}
        />

        {/* listado */}
        {/* <button onClick={ onAddCactegory }>Agregar</button> */}

        { 
          categories.map(x => {
            //return <li key={ x }>{ x }</li>
            return <GifGrid key={ x } category={ x } />
          })
        }
          
      
        {/* Gif item */}
    </>
  )
}
