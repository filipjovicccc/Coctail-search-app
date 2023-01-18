import {useEffect, useState} from 'react'
import Coctail from './Coctail'


function CoctailList() {
    const [data, setData] = useState(null)

    useEffect(()=> {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
        .then(response =>response.json())
        .then(data=> setData(data))
        .catch(error => console.error(error))
    }, [])
    if(!data){
        return <p>Loading...</p>
    }
    console.log(data)
  return (
    <div>

    <h1>Hello from CoctailList</h1>
    {data.map(item => (
       <Coctail />
    ))
    }</div>
  )
}

export default CoctailList