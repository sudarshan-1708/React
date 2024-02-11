import { useState } from 'react'
import Chai from './chai'
function App() {
  return (
    /*
    jsx only accepts to return only one HTML element
    So we wrap the element in either div or fragment<> </>
    So we return this <div> </div> or <> </> as a single element and all the desired elements are wrapped inside this.

    */
    <>  
    <Chai />
    <p>Learning react with vite and chai</p>
    </>
  )
}

export default App
