import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { IHitsRecipe } from '../types'

const APP_ID = import.meta.env.VITE_APP_ID
const APP_KEY = import.meta.env.VITE_APP_KEY

const RecipeDetails = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState<IHitsRecipe>()

    const fetchRecipe = async () => {
        const response = await fetch(
            `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`
        )
        const data = await response.json()

        setRecipe(data)
    }

    useEffect(() => {
        fetchRecipe()
    }, [])

    return (
        <div className="min-h-screen bg-gray-800 flex items-center w-full">
            <div className="px-4 w-full">
                <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-white">
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                    <div className="sm:flex sm:justify-between sm:gap-4">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                {recipe?.recipe.label}
                            </h3>

                            <p className="mt-1 text-xs font-medium text-gray-600">
                                {recipe?.recipe.source}
                            </p>
                        </div>

                        <div className="hidden sm:block sm:shrink-0">
                            <img
                                alt="Paul Clapton"
                                src={recipe?.recipe.image}
                                className="h-16 w-16 rounded-lg object-cover shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="max-w-[40ch] text-sm text-gray-500">
                            {recipe?.recipe.ingredientLines.join(', ')}
                        </p>
                    </div>

                    <dl className="mt-6 flex gap-4 sm:gap-6">
                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-gray-600">
                                Published
                            </dt>
                            <dd className="text-xs text-gray-500">
                                12/12/2021
                            </dd>
                        </div>

                        <div className="flex flex-col-reverse">
                            <dt className="text-sm font-medium text-gray-600">
                                Cooking time
                            </dt>
                            <dd className="text-xs text-gray-500">
                                20 minutes
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails
