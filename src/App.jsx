import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import ListPage from "./pages/ListPage"
import HomePage from "./pages/HomePage"
import DetailsPage from "./pages/DetailsPage"


function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path='/list' element={<ListPage/>} ></Route>
      <Route path='/Details/:id' element={<DetailsPage/>} ></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
