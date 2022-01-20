//Custom hook sirve para crear nuestros hooks mediante la carpeta hooks
// y se las nombra con useHoook... useTuHermana.. etc siempre con el use

import {useEffect,useState} from "react"
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {
    getGifs(category)
      .then(imgs => {
        
          setState({
            data: imgs,
            loading: false
          })

      })
  }, [category]);

  return state
}