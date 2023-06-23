import { useState } from 'react'
import './index.css'
import ImageInput from './components/ImageInput'
import ImageOutput  from './components/ImageOutput'

function App() {
  const [image, setImage] = useState()
  const [loading, setLoading] = useState(false)

  const handleImageUpload = (file) => {
    setImage(file)
  }

  const handleLoading = (value) => {
    setLoading(value)
  }

  return (
    <div className='flex items-center h-screen justify-center'>
      <ImageInput handleImageUpload={handleImageUpload} handleLoading={handleLoading} />
      <ImageOutput image={image} loading={loading} />
    </div>
  )
}

export default App
