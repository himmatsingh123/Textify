import React, {useState} from 'react'

export default function Textform(props) {
   
 
  const ChangetoUppercase = ()=>{
         let newText = text.toUpperCase();
         setText(newText);
         props.showAlert("Changed to UpperCase", "success");
  }

  const ChangetoLowercase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Changed to LowerCase', 'success');
  }
  const handleOnChange = (event)=>{
        setText(event.target.value);
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleExtraSpaces = ()=>{
   let  newText = text.replace(/\s+/g, ' ').trim();
    setText(newText)
    }
    const clearText = ()=>{
      let newText = "";
      setText(newText);
    }
   const  CopyText = ()=>{
   
   const txtarea = document.querySelector('textarea').select();
    document.execCommand('copy');
    props.showAlert("Copy to ClipBoard","success");
   }
  const [text,setText] = useState("");
  return (
    <>

    <div className="container">
    <h2 className={`my-3 text-${props.Mode === 'light'? 'dark': 'light'}`}>{props.heading}</h2>
      <div className="mb-3">
  <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} placeholder={"Enter you text here"}></textarea>
  <label HTMLfor="floatingTextarea"></label>
</div>
     <button className='btn btn-dark mx-1 my-1' onClick={ChangetoUppercase} disabled={text.length===0 }>toUpperCase</button>
     <button className='btn btn-dark mx-1  my-1' onClick={ChangetoLowercase} disabled={text.length===0 }>toLowerCase</button>
     <button onClick={handleExtraSpaces} className="btn btn-dark mx-1  my-1" disabled={text.length===0 }>Remove Extra Space</button>
     <button onClick={speak} className="btn btn-dark mx-1  my-1" disabled={text.length===0 }>Text Audio</button>
     <button className='btn btn-dark mx-1  my-1' onClick={CopyText} disabled={text.length===0 }>CopyAll</button>
     <button className='btn btn-dark mx-1  my-1' onClick={clearText} disabled={text.length===0 }>Clear</button>


    </div>
       <div className="container">
       <div className={`my-3 text-${props.Mode === 'light'? 'dark': 'light'}`}>
      <h2> Your text summary</h2>
      <p>{text.split(/\s+/).filter((e)=>{ return e.length !== 0}).length} words and {text.length} characters</p>
      <h3>Preview</h3>
     <p>{text}</p>
    </div>
       </div>
   
   
    </>
  )
}
