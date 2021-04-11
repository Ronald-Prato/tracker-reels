import axios from 'axios'
import './styles.css'
import { GIPHY_API_KEY } from '../../../../constants'
import { useEffect, useState } from 'react'

export const GifsList = ({ searchValue, limit, isLoading, onSelectGif }) => {
  const [data, setData] = useState([])

  const getAllGifs = async () => {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchValue.trim()}&limit=${limit}`)
    setData(response.data.data)
  }

  useEffect(() => {
    if (searchValue.trim().length) {
      getAllGifs()
    } else {
      setData([])
    }
  }, [searchValue])

  return (
    <div className="gifs-list-wrapper">
      {
        !isLoading && data.length ?
        data.map(singleGif => {
          const gifSrc = singleGif.images.preview_gif.url

          return (
            <img 
              alt="gif" 
              onClick={() => onSelectGif(singleGif.images.downsized.url) } 
              className="single-gif" 
              src={gifSrc} 
            />
          )
        })
        : !isLoading && !data.length && searchValue.length ?
        <p className="gif-no-results-message"> Sin resultados </p>
        : !isLoading && !data.length && !searchValue.length ?
        <p className="gif-write-something-message"> Busca algún gif </p>
        : isLoading &&
        <p className="gif-loading-message"> Cargando... </p>
      }
    </div>
  )
}