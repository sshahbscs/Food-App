import Header from '@/Components/layout/Header'
import Hero from '@/Components/layout/Hero'
import HomeMenu from '@/Components/layout/HomeMenu'
import SectionHeader from '@/Components/layout/SectionHeader'

export default function Home() {
  return (
    <div > 
      <Hero/>
      <HomeMenu />
      <section className='text-center my-16'>
        <SectionHeader 
        subheader={'Our Story'}
        mainheader={'About Us'}
        />
        <div className='text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4'>
          
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit 
          voluptatem accusantium doloremque laudantium, totam rem 
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
          architecto beatae vitae dicta sunt explicabo.architecto beatae vitae dicta sunt explicabo. 
          </p>
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit 
          voluptatem accusantium doloremque laudantium, totam rem 
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
          architecto beatae vitae dicta sunt explicabo. 
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          </p>
        </div>
        
      </section>

      <section className='text-center my-8'>
        <SectionHeader subheader={'Don\'t hesitate'}
        mainheader={'Contact us'}
        />
        <div className='mt-8'>
        <a className="text-2xl underline text-gray-500" href='tel:+46 738 123 123'>
          +46 738 123 123</a>
        </div>
      </section>

      
    </div>
  )
}
