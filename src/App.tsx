import './App.css'
import Home from './views/Home'
import RecipeDetails from './views/RecipeDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipe/:id" element={<RecipeDetails />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
