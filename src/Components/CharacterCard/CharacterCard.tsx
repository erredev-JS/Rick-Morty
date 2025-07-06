import { FC } from "react"
import { ICharacter } from "../../types/ICharacter"
import { useNavigate } from "react-router-dom"

interface Props {
    character: ICharacter
}

export const CharacterCard: FC<Props> = ({character}) => {

  const navigate = useNavigate()


  return (
    <div className="w-[200px] h-[300px] bg-slate-700 rounded-2xl overflow-hidden hover:scale-105 transition shadow-2xl" onClick={() => {navigate(`DetailScreen/${character.id}`)}}>
        <div>
            <img src={character.image} alt="" />
        </div>
        <div className="text-center">

        <h4 className="text-white font-bold">{character.name}</h4>

        <p>{`${character.species} ${character.gender}`}</p>

 
        <p className="italic text-teal-500">{character.status}</p>

        </div>

    </div>
  )
}
