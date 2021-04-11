import { useRef, useState } from "react"
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import TextArea from "../../../components/Textarea"
import { generateUID } from "../../../utils"
import { CategorySelection } from "./CategorySelection"
import { GifsList } from "./GifsList"
import './styles.css'

export const FromSection = ({ onChangeText, onChangeGif, onChangeCategory }) => {
  const textRef = useRef('')
  const [gifSearchValue, setGifSearchValue] = useState('')
  const [localTimeOut, setLocalTimeOut] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [selectedGif, setSelectedGif] = useState('')
  const [category, setCategory] = useState('')

  const handleUpdateText = (newText) => {
    onChangeText(newText)
  }

  const handleUpdateGif = (newGif) => {
    setSelectedGif(newGif)
    onChangeGif(newGif)
  }
  
  const handleSearchTimer = (newValue) => {
    setIsLoading(true)
    localTimeOut && setLocalTimeOut(clearTimeout(localTimeOut));
      setLocalTimeOut(
        setTimeout(() => {
          setGifSearchValue(newValue)
          setIsLoading(false)
        }, 400)
      )
  }

  const handlePostCreation = async () => {
    const newPostObj = {
      id: generateUID(),
      content: textRef.current.value,
      url: selectedGif,
      category: category
    }

    console.log(newPostObj)

    /* const response = await axios({
      method: 'POST',
      url: 'http://3.85.168.170:8000/create_post',
      data: newPostObj,
      headers: {
        'content-type': 'multipart/form-data',
      }
    })
    console.log(response.data) */
  }

  const handleCategoryChange = (newCategory) => {
    onChangeCategory(newCategory)
    setCategory(newCategory)
  }

  return (
    <div className="form-section-wrapper">
      <div className="text-input-wrapper">
        <TextArea
          label="Texto" 
          rows={5}
          id="postText"
          name="postText"
          placeholder="Contenido del post"
          onChange={handleUpdateText}
          ref={textRef}
        />

        <div className="gifs-wrapper">
          <Input 
            label="Gifs"
            id="gifSearchText"
            name="gifSearchText"
            placeholder="Buscar un gif"
            onChange={(newValue) => handleSearchTimer(newValue)}
          />

          <GifsList 
            onSelectGif={(newGif) => handleUpdateGif(newGif)} 
            limit={25} 
            isLoading={isLoading} 
            searchValue={gifSearchValue} 
          />
        </div>

        <div className="categories-wrapper">
          <CategorySelection 
            onSelectCategory={(selectedCategory) => handleCategoryChange(selectedCategory)} 
            defaultMessage="Selecciona una categoría" 
          />
        </div>

        <Button label="Crear post" variant="primary" onClick={handlePostCreation} />
      </div>
    </div>
  )
}