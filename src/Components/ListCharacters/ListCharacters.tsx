import { FC, useState } from "react"
import { ICharacter } from "../../types/ICharacter"
import { CharacterCard } from "../CharacterCard/CharacterCard"

interface Props {
    charactersArray: ICharacter[]
}

export const ListCharacters: FC<Props> = ({charactersArray}) => {

  const species: string[] = []
  const genders: string[] = []

  const [selectedSpecie, setSelectedSpecie] = useState('')
  
  const [selectedGender, setSelectedGender] = useState('')

  charactersArray.map((character) => {
    if(!species.includes(character.species)){
      species.push(character.species)
    }
    if(!genders.includes(character.gender)){
      genders.push(character.gender)
    }
  })

  const handleSpecieChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedSpecie(e.target.value)
      console.log(e.target.value)
  }

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedGender(e.target.value)
  }

  const mapFunction = (selectedGender: string, selectedSpecie: string) => {

    return charactersArray.filter((character)  => {

      const matchesGender = selectedGender ? character.gender === selectedGender : true

      const matchesSpecie = selectedSpecie ? character.species === selectedSpecie : true

      return matchesGender && matchesSpecie

    })
   
  }

  const arrayMapeado = mapFunction(selectedGender, selectedSpecie)

  return (
    <div>
      <div className="w-8/10 m-auto flex justify-between mt-5">
      <select name="" id="" className="bg-white p-2 rounded-xl" onChange={handleSpecieChange}>
        <option value="">Selecciona una raza</option>
        {species.map((specie) => (<option value={specie}>{specie}</option>))}
      </select>
      <select name="" id="" className="bg-white p-2 rounded-xl" onChange={handleGenderChange}>
        <option value="">Selecciona un genero</option>
        {genders.map((gender) => (<option value={gender}>{gender}</option>))}
      </select>
      </div>
    <div className="w-9/10 h-[92vh] m-auto mt-10 flex flex-wrap overflow-y-auto justify-center gap-12 py-9">
        {
          
        }
        {arrayMapeado.map((character) => <CharacterCard character={character} key={character.id}/>)}
    </div>
    </div>
  )
  
}
