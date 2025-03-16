import About from '@/app/about'
import Experience from '@/app/experience'

export default async function Home() {
  return (
    <main className='bg-white h-screen text-black'>
      <div className='border-b-4 border-black'>
        <About />
      </div>

      <div>
        <Experience />
      </div>
    </main>
  )
}
