import { useState } from 'react'
import Input from '../../../../components/Input'
import { CATEGORIES } from '../../../../constants'
import arrowIcon from '../.././../../assets/svg/arrow.svg'
import './styles.css'

export const CategorySelection = ({ defaultMessage, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(defaultMessage || '')
  const [showOptions, setShowOptions] = useState(false)
  const [categorySearch, setCategorySerch] = useState('')
  const categories = CATEGORIES

  const handleSelectCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory)
    onSelectCategory(selectedCategory)
    setShowOptions(false)

  }

  const dynamicOptions = () => (
    categorySearch.trim().length
      ? categories.filter(singleCategory => singleCategory.includes(categorySearch.toLowerCase()))
      : categories
  )
  
  return (
    <div className="category-selection-wrapper">
      <div onClick={() => setShowOptions(!showOptions)} className="category-selector">
        <p className="category-selected-name"> { selectedCategory } </p>
        <img allow="show" className={`arrow-icon-${showOptions ? 'up' : 'down'}`} src={arrowIcon} />
      </div>

      {
        showOptions &&
        <div className="category-input">
          <Input
            id="searchCategories"
            defaultValue={categorySearch}
            name="searchCategories"
            placeholder="Buscar una categoría"
            onChange={(newValue) => setCategorySerch(newValue)}
          />
        </div>
      }

      {
        showOptions &&
        <div className="category-list-wrapper">
          {dynamicOptions().map(singleCategory => (
            <div onClick={() => handleSelectCategory(singleCategory)} className="single-category-wrapper">
              <p className="category-name"> { singleCategory } </p>
            </div>
          ))}
        </div>
      }
    </div>
  )
}