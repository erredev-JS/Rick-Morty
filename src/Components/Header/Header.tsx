import style from './Header.module.css'
export const Header = () => {
  return (
    <header className='bg-slate-700 h-[8vh] flex items-center px-8'>
        <h1 className='text-3xl text-white font-black'>Rick & Morty API</h1>
    </header>
  );
};