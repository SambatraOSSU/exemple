import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ClientHome from './pages/client/home/ClientHome';

function App() {

      return (
            
            <BrowserRouter>
                  <Routes>
                        <Route index path='/' element={<ClientHome />} />
                  </Routes>
            </BrowserRouter>
      )
}

export default App