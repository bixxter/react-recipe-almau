import { IHitsRecipe } from '../types'

const RecipeCard = ({ recipe }: { recipe: IHitsRecipe }) => {
    return (
        <div
            key={recipe.recipe.label}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
        >
            <img
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                className="w-full"
            />
            <div className="px-6 py-4">
                <div className="flex">
                    <div className="font-bold text-xl mb-2">
                        {recipe.recipe.label}
                    </div>

                    <div className="ml-auto">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            C:{recipe.recipe.calories.toFixed(2)}
                        </span>
                    </div>
                </div>

                <div className="text-gray-700 text-base  flex">
                    {recipe.recipe.dietLabels.map((dietLabel) => (
                        <span
                            key={dietLabel}
                            className="
                            inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2
                        "
                        >
                            #{dietLabel}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
