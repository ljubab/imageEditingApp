import { useState } from "react"

function ImageInput() {
  const [blurValue, setBlurValue] = useState(0)
  const [rotateValue, setRotateValue] = useState(0)
  const [image, setImage] = useState()
  const [grayscaleValue, setGrayscaleValue] = useState(false)

  function imageChange(e) {
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(blurValue, rotateValue, grayscaleValue)
    console.log(image)

    const data = {
      'img': image,
      'blur': blurValue,
      'rotate': rotateValue,
      'grayscale': grayscaleValue
    }

    fetch('http://localhost:5000/postImage', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(data)
    }).then(res => {
      setImage(URL.createObjectURL(res))
    })
  }

  return (
    <div className="border-2 border-stone-950 rounded-xl m-8 p-5 max-w-md">
      <form className='flex flex-col' onSubmit={handleSubmit} >
        <input type="file" accept='.jpg, .jpeg' onChange={imageChange} />

        {image && 
          <>
            <img src={image} className="max-w-sm" />

            <label htmlFor="blur">Blur</label>
            <input type="range" name="blur" id="blur" 
            value={blurValue} onChange={(e) => setBlurValue(e.target.value)}/>
            {blurValue}

            <label htmlFor="rotate">Rotate</label>
            <input type="range" name="rotate" id="rotate" 
            value={rotateValue} onChange={(e) => setRotateValue(e.target.value)} max = "360"/>
            {rotateValue}

            <div className="flex gap-8">
              <label htmlFor="grayscale">Grayscale</label>
              <input type="checkbox" name="grayscale" id="grayscale" onChange={() => setGrayscaleValue(!grayscaleValue)} />
            </div>


            <button type="submit" className="bg-blue-600
            text-slate-50 p-1 mt-4 text-xl hover:bg-blue-800">Send</button>
          </>
        }
      </form>
    </div>
  )
}

export default ImageInput