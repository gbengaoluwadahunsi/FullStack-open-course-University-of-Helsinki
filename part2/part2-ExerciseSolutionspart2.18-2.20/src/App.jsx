
import Content from './components/Content'
import Footer from './components/Footer'
import Navbar  from './components/Navbar'
// import Notification from './components/Notification'
import ScrollUp from './components/ScrollUp'



const App = () => {
  
  
  return  (
    <div className='container'>
        <div className='app-body'>
          <Navbar/>
          <main className='homepage'>
            <div className='countria-section'>
              <h1>Countria</h1>
              <p>Countries information,current weather forecast in a fast and exciting manner</p>
            </div>
          </main>
          <Content  />        
         </div>
         <ScrollUp />
         <Footer />
    </div>
  )
}

export default App
