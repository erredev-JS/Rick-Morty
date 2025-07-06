import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../https/crudCharacters";
import { ICharacterDetails } from "../../types/ICharacterDetails";
import { Header } from "../Header/Header";
import { CardDetails } from "./CardDetails";
import { Loader } from "../Loader/Loader";
import { Footer } from "../Footer/Footer";

export const DetailsScreen = () => {
   const {idParam} = useParams() 
   
  const [characterDetail, setCharacterDetail] = useState<ICharacterDetails | undefined>()

  const [loading, setLoading] = useState(false)
  

  const getDetails = async (id: string) => {
    setLoading(true)
    const response = await getCharacterById(id)
    setCharacterDetail(response) 
    setLoading(false)
  }

   useEffect(() => {
    if(idParam){
      getDetails(idParam)

    }
   }, [])



  return (
    <>
      <Header/>
    <div className="min-h-[92vh]">
    {loading ? <Loader/> : characterDetail &&  <CardDetails character={characterDetail}/>}
    </div>
    <Footer/>
    </>
  );
};