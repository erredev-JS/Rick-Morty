import { Router } from 'react-router-dom'
import './App.css'
import { AppRoutes } from './Routes/AppRoutes'
import { MainScreen } from './Screens/MainScreen/MainScreen'

function App() {


  return (
    <div className='bg-gradient-to-r from-slate-900 to-stone-600'>
   
      <AppRoutes/>
    </div>
  )
}

export default App
