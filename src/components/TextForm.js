import React from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked " + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLowClick = () =>{
        //console.log("Lowercase was clicked " + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleOnChange = (event) =>{
        //console.log("Handle On Change");
        setText(event.target.value)
    }

    const handleClearClick = (event) =>{
        setText('');
        props.showAlert("Text Cleared!", "success");
    }

    const handleRemoveWhiteSpaceClick = (event) =>{
        let newText = text.trim();
        setText(newText);
        props.showAlert("Removed post white space", "success");
    }

    const handleRemoveExtraSpace = (event) =>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space", "success");
    }

    const handleCopy = (event) =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text to clipboard", "success");
    }

    
  const [text,setText] = useState('');
//   setText("New Text");
  return (
        <>
        <div className='container'>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#3e5975' : 'white',
                    color: props.mode === 'dark' ? 'white' : 'black'}}id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleRemoveWhiteSpaceClick}>Remove Post White Spaces</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
        </div>  

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Nothing to Preview!"}</p>
        </div>
        </>
    )
}
