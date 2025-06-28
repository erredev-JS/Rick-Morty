import { FC } from "react"
import { ICharacter } from "../../types/ICharacter"
import { CharacterCard } from "../CharacterCard/CharacterCard"

interface Props {
    charactersArray: ICharacter[]
}

export const ListCharacters: FC<Props> = ({charactersArray}) => {
  return (
    <div className="w-9/10 h-[92vh] m-auto mt-10 flex flex-wrap overflow-y-auto justify-center gap-12 py-9">
        {charactersArray.map((character) => <CharacterCard character={character} key={character.id}/>)}
    </div>
  )
}
