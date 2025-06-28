import axios from "axios"
import { ICharacter } from "../types/ICharacter"

const BASE_URL = 'https://rickandmortyapi.com/api/character'

export const getAllCharacters = async (): Promise<ICharacter[]> => {

    try {
        
        const response = await axios.get(BASE_URL)

        return response.data.results


    } catch (error) {

        return []

        
    }

} 