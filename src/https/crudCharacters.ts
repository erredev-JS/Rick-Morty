import axios from "axios"
import { ICharacter } from "../types/ICharacter"
import { ICharacterDetails } from "../types/ICharacterDetails"

const BASE_URL = 'https://rickandmortyapi.com/api/character'

export const getAllCharactersPaged = async (page: number): Promise<ICharacter[]> => {

    try {
        
        const response = await axios.get(`${BASE_URL}/?page=${page}`)

        return response.data.results


    } catch (error) {

        return []

        
    }

} 

export const getCharacterById = async (id: string): Promise<ICharacterDetails | undefined> => {

    try {
        
        const response = await axios.get(`${BASE_URL}/${id}`)
        return response.data    

    } catch (error) {
        console.log(error)
        return undefined
    }

}