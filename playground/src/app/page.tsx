import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return result.json()
}

export default async function Home() {
  const recipes = await getRecipes()

  return (
    <main>
      <div className='gap-8 grid grid-cols-3'>
        {recipes.map((recipe) => (
          <Card key={recipe.id} className='flex flex-col justify-between'>
            <CardHeader className='flex-row items-center gap-4'>
              <Avatar>
                <AvatarImage src={`/img/${recipe.image}`} alt='@shadcn' />
                <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button>View Recipe</Button>
              {recipe.vegan && <Badge variant='secondary'>Vegan!</Badge>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}
