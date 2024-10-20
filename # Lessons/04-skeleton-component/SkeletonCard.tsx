import { Card, CardContent, CardHeader, CardFooter } from './ui/card'
import { Skeleton } from './ui/skeleton'

const SkeletonCard = () => {
  return (
    <Card className='flex flex-col justify-between'>
      <CardHeader className='flex-row items-center gap-4'>
        <Skeleton className='rounded-full w-12 h-12' />
        <Skeleton className='flex-grow h-6' />
      </CardHeader>
      <CardContent>
        <Skeleton className='flex-grow mt-4 h-4' />
        <Skeleton className='flex-grow mt-4 h-4' />
        <Skeleton className='mt-4 w-1/2 h-4' />
      </CardContent>
      <CardFooter>
        <Skeleton className='w-28 h-10' />
      </CardFooter>
    </Card>
  )
}

export default SkeletonCard
