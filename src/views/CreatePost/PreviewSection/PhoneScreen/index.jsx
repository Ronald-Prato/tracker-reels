import './styles.css'

export const PhoneScreen = ({ previewText, previewGif, previewCat }) => {

  return (
    <div className="screen-wrapper">
      <section className="screen-preview-area">
        {
          previewCat &&
          <p className="preview-category"> { previewCat } </p>
        }

        <div className="preview-text-wrapper">
          <h2 className="preview-text-content"> { previewText } </h2>
        </div>

        <div className="preview-gif-wrapper">
          {
            previewGif && previewGif.length > 0 &&
            <img alt="gif" className="preview-gif-content" src={previewGif}/>
          }
        </div>
      </section>
    </div>
  )
}