import React, { useState } from "react";

export default function Forms(props) {
  const [text, setText] = useState("");
  const [result, setResult] = useState(0);
  // text = "NEw text"; This is not the write way to change the text
  // setText = ("New text"); Correct way
  const handleUpClick = () => {
    // console.log("Upper case")
    let newtext = text.toUpperCase();
    props.showAlert("Converted to upper case","success")
    setText(newtext);
  };
  const handleLowClick = () => {
    // console.log("Upper case")
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lower case","success")
  };
  const handleonChange = (event) => {
    //Handling of events
    // console.log("On change")
    setText(event.target.value);
    //  var k = event.target.value;
    // console.log(k);
  };
  const handleClearText = () => {
    setText(" ");
    props.showAlert("Text cleared","success")
  };
  const handleCountVowels = () => {
    let expText = text.toLowerCase();
    var count1 = 0;
    for (let i = 0; i < expText.length; i++) {
      props.showAlert("Text cleared","success")
      if (
        expText[i] === "a" ||
        expText[i] === "e" ||
        expText[i] === "i" ||
        expText[i] === "o" ||
        expText[i] === "u"
        ) {
          count1 += 1;
        }
        props.showAlert(`Number of vowels are ${count1}`,"success")
    }
    console.log(count1);
    setResult(count1);
    return count1;
  };
  return (
    <>
      <div>
        <div className="mb-3">
          <h1 className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</h1>
          {/* <label for="myBox" className="form-label">Enter  text</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}
          ></textarea>{" "}
          {/*Rows will decide the text area */}
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Convert to Lower case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCountVowels}>
          Find the number of vowels{" "}
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearText}>
          Clear text{" "}
        </button>
      </div>
      <div className="container my-3">
        <h1 className={`text-${props.mode ==='light'?'dark':'light'}`}>Your Text Summary</h1>
        <p className={`text-${props.mode === 'light'?'dark':'light'}`}>
          {" "}
          {text.length>0?text.split(" ").length:"0"} words and {text.length} characters
        </p>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          Time required to read the words is {text.split(" ").length * 0.008}{" "}
          minutes
        </p>
        <h2 className={`text-${props.mode==='light'? 'dark':'light'}`}>Preview</h2>
        <p className= {`text-${props.mode==='light'? 'dark':'light'}`}>{text.length>0?text:"Enter your text to preview "}</p>
        <h2 className={`text-${props.mode === 'light'?'dark':'light'}`}>Number of vowels are</h2>
        <p className={`text-${props.mode === 'light'?'dark':'light'}`}>{result}</p>
      </div>
    </>
  );
}
