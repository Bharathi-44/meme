import memData from "../memeData";
import React from "react";

function UserForm() {
  let memesArray = memData.data.memes;
  let [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  function getImage() {
    let randomNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randomNumber].url;
    console.log(url);
    //above lines is to get random url
    //below i did for 0 index url
    console.log(memData.data.memes[0].url);
    setMeme(function (prevMeme) {
      return { ...prevMeme, randomImage: url };
    });
  }
  function handleChange(event) {
    let { name, value } = event.target;
    setMeme(function (prevMeme) {
      return { ...prevMeme, [name]: value };
    });
  }
  return (
    <div className="marginForm">
      <div class="d-flex flex-row justify-content-between">
        <input
          type="text"
          class="form-control mr-3"
          placeholder="Enter top meme text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          class="form-control"
          placeholder="Enter bottom meme text"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
      </div>
      <div className="text-center">
        <button onClick={getImage} class="btn btn-violet mt-4 p-2">
          Get a new Meme Image 🖼
        </button>
        <div className="m-4 position-relative">
          <img src={meme.randomImage} alt="no" className="memeimg" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}
export default UserForm;
