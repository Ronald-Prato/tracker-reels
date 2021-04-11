import './styles.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import axios from 'axios'

const api_key = 'PEC6ECFFSQzdV40XZmhfp6UJJ3FouWYe'

export const Home = () => {
  const { register, handleSubmit, getValues } = useForm()
  const [gifSeach, setGifSearch] = useState('')
  const [postText, setPostText] = useState('')
  const [gifs, setGifs] = useState([])
  const [selectedGif, setSelectedGif] = useState('')

  const onSubmit = (data) => {
    createNewPost()
  }

  const handleGifSearch = async () => {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${gifSeach}&limit=25`)
    setGifs(response.data.data)
  }

  const createNewPost = async () => {
    const newPostObj = {
      id: Math.floor(Math.random()*10000),
      content: postText,
      url: selectedGif,
      category: 'run'
    }

    const response = await axios({
      method: 'POST',
      url: 'http://3.85.168.170:8000/create_post',
      data: newPostObj,
      headers: {
        'content-type': 'multipart/form-data',
      }
    })
    console.log(response.data)
  }

  return (
    <div className="main-wrapper">

      <div className="post-preview">
        <p className="post-text"> { postText } </p>

        <img className="selected-gif" src={selectedGif} />
      </div>

      <div >
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <input 
            onChange={event => setPostText(event.target.value)}
            className="custom-input" 
            placeholder="Texto del post" 
            />
          
          <button className="custom-button-primary" type="submit"> Submit </button>
        </form>

        <div>
          <input className="custom-input" onChange={event => setGifSearch(event.target.value)} placeholder="Buscar gifs" type="text" />
          <button className="custom-button-secondary" onClick={() => handleGifSearch()}> Buscar gifs </button>
          
          <div className="gifs-render">
            {
              gifs.length > 0 &&
              gifs.map((singleGif, index) => {
                const imageSrc = singleGif.images.preview_gif.url

                return (
                  <img 
                    onClick={() => setSelectedGif(imageSrc)}
                    key={index} 
                    className="single-gif" 
                    src={imageSrc} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}