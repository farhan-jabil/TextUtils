import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("");
  const wordLen = text.split(" ").filter((elements) => { return elements.length !== 0 }).length;

  const [btn1, setbtn1] = useState("Convert to Uppercase");
  const [btn2, setbtn2] = useState("Make Bold");
  const [btn3, setbtn3] = useState("Change Color");
  const [clr, setclr] = useState({
    color: "black",
  })

  const handleUpClick = () => {
    if (btn1 === "Convert to Uppercase") {
      setText(text.toUpperCase());
      setbtn1("Convert to Lowercase");
      props.showAlert("Lowercase updated succesfully", "success")
    }
    else {
      setText(text.toLowerCase());
      setbtn1("Convert to Uppercase");
      props.showAlert("Uppercase updated succesfully", "success")
    }
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleClear = () => {
    setText("");
    props.showAlert("Cleared succesfully", "success")
  }

  const handleBold = () => {
    let bld = document.querySelector("#myBox");
    if (btn2 === "Make Bold") {
      bld.classList.add("bold");
      setbtn2("Remove Bold");
      props.showAlert("Turn Bold succesfully", "success");
    }
    else {
      bld.classList.remove("bold");
      setbtn2("Make Bold");
      props.showAlert("Remove Bold succesfully", "success")
    }
  }

  const handleColor = () => {
    if (btn3 === "Change Color") {
      setclr({
        color: "red",
      })
      setbtn3("Remove Color")
      props.showAlert("Changing color succesfully", "success")
    }
    else {
      setclr({
        color: "black",
      })
      setbtn3("Change Color")
      props.showAlert("Removing color succesfully", "success")
    }
  }

  const handleCopy = () => {
    let text = document.querySelector("#myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied succesfully", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space clear succesfully", "success")
  }

  return (
    <>
      <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1 className='mt-2'>{props.heading}</h1>
        <div className="mt-3">
          <textarea className='form-control' placeholder='Enter your text' style={{ clr, backgroundColor: props.mode === "light" ? "white" : "#001029", color: props.mode === "light" ? "black" : "white" }} value={text} onChange={handleOnChange} id='myBox' rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleUpClick}>{btn1}</button>
        <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleBold}>{btn2}</button>
        <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleColor}>{btn3}</button>
        <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleCopy}>Copy text</button>
        <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleExtraSpaces}>Remove Extra space</button>
        <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2' onClick={handleClear}>Clear Box</button>
      </div>
      <div className='container my-3' style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>Your text summary</h1>
        <p>{wordLen} words and {text.length} characters</p>
        <p>You will need {0.008 * wordLen.toFixed(4)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Your text is empty"}</p>
      </div>
    </>
  )
}
