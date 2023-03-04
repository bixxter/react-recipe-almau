import { useEffect, useState } from 'react'
import { IHitsRecipe } from '../types'
import RecipeCard from '../components/RecipeCard'
import { NavLink } from 'react-router-dom'

const APP_ID = import.meta.env.VITE_APP_ID
const APP_KEY = import.meta.env.VITE_APP_KEY

function Home() {
    const [recipesList, setRecipesList] = useState<IHitsRecipe[]>([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')

    const fetchRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        )
        const data = await response.json()

        setRecipesList(data.hits)
    }

    const updateSearch = (e: any) => {
        setSearch((e.target as HTMLInputElement).value)
    }

    const getSearch = (e: any) => {
        e.preventDefault()

        if (search) {
            setQuery(search)

            return
        }

        setQuery('chicken')
    }

    useEffect(() => {
        fetchRecipes()
    }, [query])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 ">
            <header className="px-20 w-full mb-4">
                <div className="mb-4 py-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                            <span className="sm:block">Find the best</span>
                            <span className="sm:block">recipes for you</span>
                        </h1>
                    </div>
                </div>

                <form
                    onSubmit={getSearch}
                    className="flex items-center justify-center w-full"
                >
                    <input
                        className="w-full border border-gray-300 rounded-md p-2"
                        type="text"
                        value={search}
                        onChange={updateSearch}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </header>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {recipesList.map((recipe) => (
                        <NavLink
                            key={recipe.recipe.label}
                            to={`/recipe/${recipe.recipe.uri.split('_')[1]}`}
                        >
                            <RecipeCard recipe={recipe} />
                        </NavLink>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Home
