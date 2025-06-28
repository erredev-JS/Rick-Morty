import { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { ListCharacters } from "../../Components/ListCharacters/ListCharacters";
import { ICharacter } from "../../types/ICharacter";
import { getAllCharacters } from "../../https/crudCharacters";



export const MainScreen = () => {

    const [charactersArray, setCharactersArray] = useState<ICharacter[]>([])

    const getCharacters = async () => {
        const response = await getAllCharacters()
        setCharactersArray(response)
    }

    useEffect(() => {
        getCharacters()
    }, [])



  return (
    <>
        <Header/>
        <ListCharacters charactersArray={charactersArray}/>
    </>
  );
};