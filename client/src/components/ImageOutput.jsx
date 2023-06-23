import ReactLoading from 'react-loading';

function ImageOutput({ image, loading }) {
  if(loading) {
    return (
      <div className="border-2 border-stone-950 rounded-xl m-8 p-5 max-w-md">
        <ReactLoading type='spin' color='#1e40af' height={50} width={50} />
      </div>
    )
  }
  if(image) {
    return (
      <div className="border-2 border-stone-950 rounded-xl m-8 p-5 max-w-md">
        <img src={image} className="max-w-sm" />
      </div>
    )
  }
}

export default ImageOutput