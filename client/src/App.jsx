import { useState } from 'react'
import './index.css'
import ImageInput from './components/ImageInput'
import ImageOutput  from './components/ImageOutput'

function App() {
  const [image, setImage] = useState()

  const handleImageUpload = (file) => {
    setImage(file)
  }

  return (
    <div className='flex items-center h-screen justify-center'>
      <ImageInput handleImageUpload={handleImageUpload} />
      <ImageOutput image={image}/>
    </div>
  )
}

export default App
