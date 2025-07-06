import { FC } from "react";
import { ICharacterDetails } from "../../types/ICharacterDetails";

interface Props {
  character: ICharacterDetails
}


export const CardDetails: FC<Props> = ({character}) => {
  return (
    <div className="flex flex-col md:flex-row py-5">
    <div className="cursor-pointer [transform:perspective(800px)_rotateY(10deg)] hover:[transform:perspective(800px)_rotateY(-10deg)] w-96 sm:w-84 p-5 bg-violet-300 rounded-lg shadow-2xl group duration-300 m-auto mt-10">

      <h1 className="text-center font-black italic animate-pulse">Character ID: #{character.id}</h1>
    <div className="bg-center bg-cover bg-img-bg p-5 rounded-lg">
      <img  className="duration-300 " src={character?.image}alt="girl image" />
    </div>

    <div className="text-center mt-4 text-gray-900">
      <p className="font-bold text-xl">{character?.name}</p>
      <p>{character?.location.name}</p>
    </div>
  </div>

  <div className=" h-100  w-9/10 m-auto rounded-2xl overflow-hidden  mt-5 bg-violet-300 border-4 border-violet-100 md:w-6/10 md:h-100 md:mt-12 shadow-2xl md:flex md:flex-col">
    <h1 className="text-2xl text-white font-black text-center w-full bg-violet-500 border-b-4 h-[10%] flex items-center justify-center ">Details</h1>
    <div className="flex flex-col gap-5 px-5 pt-3">
    <p className="text-2xl text-white font-black">Origin:  <span className="italic text-xl"><br />{character.origin.name}</span></p>
    <p className="text-2xl text-white font-black">Current Location: <span className="italic text-xl"><br />{character.location.name}</span></p>
    <p className="text-2xl text-white font-black">Specie:  <span className="italic text-xl"><br />{character.species}</span></p>
    <p className="text-2xl text-white font-black">Status:  <span className="italic text-xl"><br />{character.status}</span></p>
    </div>
  </div>
    </div>
  );
};