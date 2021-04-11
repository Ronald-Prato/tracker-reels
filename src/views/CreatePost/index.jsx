import { useState } from 'react'
import { FromSection } from './FormSection'
import { PreviewSection } from './PreviewSection'
import './styles.css'

export const CreatePost = () => {
  const [previewText, setPreviewText] = useState('')
  const [previewGif, setPreviewGif] = useState('')
  const [previewCat, setPreviewCat] = useState('')

  return (
    <div className="create-post-wrapper">
      <section className="form-section">
        <FromSection 
          onChangeGif={(newValue) => setPreviewGif(newValue)} 
          onChangeText={(newValue) => setPreviewText(newValue)}
          onChangeCategory={(newValue) => setPreviewCat(newValue)} />
      </section>

      <section className="preview-section">
        <PreviewSection 
          previewText={previewText} 
          previewGif={previewGif}
          previewCat={previewCat} />
      </section>

    </div>
  )
}