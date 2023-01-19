import React, {useState, useContext, useEffect} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const[loading, setLoading]= useState(true)
    const[searchTerm, setSearchTerm]=useState('a') //stejt za searchovanje, a default value
    const [cocktails, setCocktails] = useState([])

    const url = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s="

    const fetchDrinks = async () => {
        setLoading(true)
        try{
           const response = await fetch(`${url}${searchTerm}`, {mode: "no-cors"})
           const data = await response.json()
           const{drinks} = data
           if(drinks){
              const newCocktails = drinks.map((item) =>{
                 const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
              
              return {id: idDrink,name:strDrink, image: strDrinkThumb, info:strAlcoholic, glass:strGlass}
            })
            setCocktails(newCocktails)
           }else{
            setCocktails([])
           }
           setLoading(false)
        } catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
      fetchDrinks()
    }, [searchTerm])

    return(
        <AppContext.Provider
        value={{loading, cocktails, setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )

}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}