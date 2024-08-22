import {
BrowserRouter,
} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/Home'
import { one } from './assets'
import Found from './components/Found'
import Partners from './components/Partners'
import Work from './components/Work'
import Mission from './components/Mission'
import Events from './components/Events'
import Contact from './components/Contact'

const App = () => {

  return(
    <BrowserRouter>
        <div className='flex flex-col h-full w-full '>
          <div className='bg-cover bg-no-repeat bg-center pb-2'>
            <Navbar />
          </div>
          <div className=' w-full h-full'>
            <div className=''>
              <div className=''>
                <br />
                <img src={one} alt="image1" />
              </div>
            </div>
            <Home />
            <Found />
            <Partners />
            <Work />
            <Mission />
            <Events />
            <Contact />
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App;