import { useStorePages } from "../../Stores/useStorePages";

export const Pagination = () => {
    const {page, dec, inc} = useStorePages()

   
    const minusPage = (n: number, limit: number) => {
      if(page > limit){
        dec(n)
      }else{
        alert('No puedes bajar mas de 1')
      }
    
   
  
    }

    const appendPage = (n: number, limit: number) => {
      if(page < limit){
        inc(n)
      }else{
        alert(`No puedes aumentar mas de 42`)
      }
    }
  return (
   
        <div className="flex w-[200px] h-[5vh] bg-black rounded m-auto  justify-center items-center fixed bottom-13 left-1/2 -translate-x-1/2 mb-2 text-white text-2xl font-bold gap-1">
          <button className="w-1/5 cursor-pointer  rounded h-full bg-blue-500" onClick={() => minusPage(2, 2)}>
           <p>{"<<"}</p>
          </button>
          <button className="w-1/5 cursor-pointer  rounded h-full bg-blue-500" onClick={() => minusPage(1, 1)}>
           <p>{"<"}</p>
          </button>
          <div className="w-1/5 text-center">
            {page}
          </div>
          <button className="w-1/5 cursor-pointer  rounded h-full bg-blue-500" onClick={() => appendPage(1, 42)}>
            <p>{">"}</p>
          </button>
          <button className="w-1/5 cursor-pointer  rounded h-full bg-blue-500" onClick={() => appendPage(2, 41)}>
            <p>{">>"}</p>
          </button>
        </div>
    
  );
};