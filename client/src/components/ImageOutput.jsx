function ImageOutput({ image }) {
  return (
    <>
      {image && (
          <div className="border-2 border-stone-950 rounded-xl m-8 p-5 max-w-md">
            <img src={image} className="max-w-sm" />
          </div>
      )}
    </>
  )
}

export default ImageOutput