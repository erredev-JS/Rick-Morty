import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { MainScreen } from '../Screens/MainScreen/MainScreen'
import { DetailsScreen } from '../Components/DetailsScreen/DetailsScreen'

export const AppRoutes = () => {
  return (

        <Routes>
            <Route path="/" element={<MainScreen/>}/>
            <Route path="/DetailScreen/:idParam" element={<DetailsScreen/>}/>
        </Routes>

  )
}
