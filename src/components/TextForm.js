import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState('');

    const handleUpClick=()=>{
        console.log("uppercase clicked")
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase','success');
    }

    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert('text cleared','success');
    }

    const handleLoClick=()=>{
        console.log("lowercase clicked")
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('converted to lowercase','success');
    }

    const handleOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value)
    }

    const handleCopy=()=>{
        let text=document.getElementById('box')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('copied to clipboard','success');
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('Extra spaces removed','success');
    }
    return (
        <>
        <div  style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} value={text} id="box" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>remove extra spaces</button>

        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 className="my-3">Your text summary</h2>
            <table>
                <tr>
                    <th>Words</th>
                    <th>characters</th>
                    <th>time taken</th>
                </tr>
                <tr>
                    <td>{text.split(" ").length}</td>
                    <td>{text.length}</td>
                    <td>{0.008 * text.split(" ").length}</td>
                </tr>
            </table>
            {/* <p>
               {text.split(" ").length} words and {text.length} characters
            </p>
            <p>
                {0.008 * text.split(" ").length} minutes taken to read.
            </p>
            <h2>Preview</h2>
            <p>
                {text.length>0?text:"Enter something in textbox to preview"}
            </p> */}
        </div>
        </>
    )
}
