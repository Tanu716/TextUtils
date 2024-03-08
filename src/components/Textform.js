import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked :" + text);
    let newText = text.toUpperCase();
    setText(newText);
	props.showAlert(" Converted to Uppercase !!", "success");
  };
  const handleLowClick = () => {
    //console.log("Lowercase was clicked :" + text);
    let newText = text.toLowerCase();
    setText(newText);
	props.showAlert(" Converted to Lowercase !!", "success");
  };
  const handleClear = () => {
    //console.log("Clkearing the text);
    let newText = "";
    setText(newText);
	props.showAlert(" Cleared the text !!", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
	props.showAlert(" Copied to Clipboard !!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
	props.showAlert(" Removed extra spaces !!", "success");
  };

  const handleOnChange = (event) => {
    //console.log("onchange was clicked !!");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //text = "new text";    // Wrong way to change the state
  //setText("new text msg");   // Correct way to change the state
  
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark'?'white':'black'}}
      >
        <h2>{props.heading}</h2>
        <div className="container mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ background: props.mode === 'dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-5"
        style={{ color: props.mode==='dark'?'white':'black'}}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here !!"}</p>
      </div>
    </>
  );
}
