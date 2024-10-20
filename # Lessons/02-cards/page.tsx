import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card'

interface Recipe {
  title: string
  image: string
  time: number
  description: string
  vegan: boolean
  id: string
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:5000/recipes')
  return result.json()
}

export default async function Home() {
  const recipes = await getRecipes()

  // #
  return (
    <main>
      <div className='gap-8 grid grid-cols-3'>
        {recipes.map((recipe) => (
          <Card key={recipe.id} className='flex flex-col justify-between'>
            <CardHeader className='flex-row items-center gap-4'>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <button>View Recipe</button>
              {recipe.vegan && <p>Vegan!</p>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}
