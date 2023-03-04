export interface IHitsRecipe {
    recipe: {
        uri: string
        label: string
        image: string
        images: Images
        source: string
        url: string
        shareAs: string
        yield: number
        dietLabels: string[]
        healthLabels: string[]
        cautions: string[]
        ingredientLines: string[]
        ingredients: Ingredient[]
        calories: number
        glycemicIndex: number
        totalCO2Emissions: number
        co2EmissionsClass: string
        totalWeight: number
        cuisineType: string[]
        mealType: string[]
        dishType: string[]
        instructions: string[]
        tags: string[]
        externalId: string
        totalNutrients: TotalNutrients
        totalDaily: TotalDaily
        digest: Digest[]
    }
}

export interface IRecipeResponse {
    hits: IHitsRecipe[]
}

export interface IRecipe {
    label: string
    image: string
    ingredients: Ingredient[]
    calories: number
    dietLabels: string[]
    healthLabels: string[]
    url: string
    source: string
}

export interface Images {
    THUMBNAIL: Thumbnail
    SMALL: Small
    REGULAR: Regular
    LARGE: Large
}

export interface Thumbnail {
    url: string
    width: number
    height: number
}

export interface Small {
    url: string
    width: number
    height: number
}

export interface Regular {
    url: string
    width: number
    height: number
}

export interface Large {
    url: string
    width: number
    height: number
}

export interface Ingredient {
    text: string
    quantity: number
    measure: string
    food: string
    weight: number
    foodId: string
}

export interface TotalNutrients {}

export interface TotalDaily {}

export interface Digest {
    label: string
    tag: string
    schemaOrgTag: string
    total: number
    hasRDI: boolean
    daily: number
    unit: string
    sub: Sub
}

export interface Sub {}
