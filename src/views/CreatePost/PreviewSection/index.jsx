import './styles.css'
import phoneDisplay from '../../../assets/png/phone-display.png'
import { PhoneScreen } from './PhoneScreen'

export const PreviewSection = ({ previewText, previewGif, previewCat }) => {

  return (
    <div className="preview-section-wrapper">
      <div className="phone-display-wrapper">
        <img alt="phone" className="phone-display" src={phoneDisplay} />

        <div className="phone-screen">
          <PhoneScreen 
            previewText={previewText} 
            previewGif={previewGif}
            previewCat={previewCat} />
        </div>
      </div>
    </div>
  )
}