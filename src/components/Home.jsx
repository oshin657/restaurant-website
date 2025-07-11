import Hero from './Hero'
import './Home.css'
import Rooms from './Rooms'
import Footer from '../Footer'
import Features from './Features'

function Home() {
  return (
    <main>
      <Hero />
     <Rooms/>
     <Features/>
     <Footer/>
    </main>
  )
}

export default Home