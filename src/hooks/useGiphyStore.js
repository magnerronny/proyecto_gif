import { useDispatch, useSelector } from "react-redux"
import { onSaveGif } from "../store";
import { apiGiphy } from "../api";

const api = import.meta.env.VITE_API_KEY;

export const useGiphyStore = () => {
  
  const { gif } = useSelector(state => state.giphy);
  const dispatch = useDispatch();

  const startSavingGif = async(query) => {
    const {data} = await apiGiphy.get(`v1/gifs/search?api_key=${api}&q=${query}&limit=2`);
    const newData = [];  
    data.data.map(item => newData.push({title:item.title, imagen:item.images.original.url}))
    // console.log([{query,newData}]);
    dispatch(onSaveGif({query,newData}));
  }
  return {
    //* metodos
    gif,
    //* propiedades
    startSavingGif,
  }
}
