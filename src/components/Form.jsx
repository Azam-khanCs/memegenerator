import React, { useEffect, useState } from 'react'
import data from '../data'

const Form = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allImages, setAllImages] = useState(data)

  function getMeme() {

    let memsArray = allImages.data.memes
    let randomNumber = Math.floor(Math.random() * memsArray.length)
    let url = memsArray[randomNumber].url
    console.log(allImages)

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url
      }
    })
  }
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.jason())
      .then(data => setAllImages(data))
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="container">
      <div className='form '>
        <form onSubmit={handleSubmit}>
          <div className='form-input'>
            <input type="text"
              name="topText"
              onChange={handleChange}
              placeholder='Shut up'
              value={meme.topText}
            />
            <input type="text"
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
              placeholder='and take my money'
            />
          </div>
          <button onClick={getMeme} >Get a new meme image </button>
        </form>
        <div className="hero-img">
          <img src={meme.randomImage} alt="" />
          <h2 className='top'>{meme.topText} </h2>
          <h2 className='bottom'> {meme.bottomText}</h2>
        </div>
      </div>
    </div>
  )
}

export default Form