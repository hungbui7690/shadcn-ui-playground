import SkeletonCard from '@/components/SkeletonCard'

export default function Loading() {
  return (
    <main>
      <div className='gap-8 grid grid-cols-3'>
        {'aaa'.split('').map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  )
}
