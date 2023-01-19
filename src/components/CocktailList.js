import {useEffect, useState} from 'react'
import Cocktail from './Cocktail';
import { useGlobalContext } from '../context'
import Loading from "./Loading"


function CocktailList() {
  const {cocktails, loading} = useGlobalContext();

  if(loading){
    
    return <Loading/>
  }
  if(cocktails.length < 1){
   return( <h2 className='section-title'>
     No cocktail matched your search criteria
    </h2>
   )
  }
   
  return (
    <section className="section">
    <h2 className='section'>
      Cocktails
    </h2>
    <h2>Cocktail List</h2>
    <div className="cocktails-center">
    {cocktails.map((item) => {
      return <Cocktail key={item.id}{...item}/>
    })}
    </div>
 
    </section>
  )
}

export default CocktailList