import { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { ListCharacters } from "../../Components/ListCharacters/ListCharacters";
import { ICharacter } from "../../types/ICharacter";
import { getAllCharactersPaged } from "../../https/crudCharacters";
import { useStorePages } from "../../Stores/useStorePages";
import { Pagination } from "../../Components/DetailsScreen/Pagination";
import { Loader } from "../../Components/Loader/Loader";
import { Footer } from "../../Components/Footer/Footer";



export const MainScreen = () => {

    const [charactersArray, setCharactersArray] = useState<ICharacter[]>([])

    const {page} = useStorePages()
    
    const [loading, setLoading] = useState(false)
  

    const getCharacters = async () => {

        setLoading(true)
        const response = await getAllCharactersPaged(page)
        setCharactersArray(response)
        setLoading(false)

    }

    useEffect(() => {
        getCharacters()
    }, [page])



  return (
    <>
        <Header/>
        {loading ? <Loader/> : <ListCharacters charactersArray={charactersArray}/>}
        <Pagination/>
        <Footer/>
    </>
  );
};