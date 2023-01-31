
import React,{useState} from 'react'

export default function (props) {
const [mystyle,setmystyle] = useState({ 
    color: 'Black',
      backgroundColor : 'white'
})
const [btnText,setbtnText] = useState('change to light mode')
      const changetheme =  ()=>{
          if(mystyle.color === 'white'){
       setmystyle({
        color: 'Black',
        backgroundColor : 'white'
       })
       setbtnText('change to dark Mode');
    }
    else{
        setmystyle({
            color: 'white',
            backgroundColor : 'Black'
           })
           setbtnText(' change to light  Mode');
    }
      }
  return (
     <>
         <div className="container"   style={mystyle}>
        <h1>About Us</h1>
       <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingOne" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
      What is Textify?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>Textify</strong><p>Textify is tool or website which help us to make a text or peragraph mistake free and look beautiful also. it is designed by Himmat Singh a Full Stack Developer. </p>
      </div>
    </div>
  </div>
  <div className="accordion-item"  style={mystyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button  style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What can’t I do with this tool?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
     <p> Finding every error in a text is difficult, even for a professional proofreader. Computers are very good at finding spelling mistakes and can often pick up other kinds of errors. 
      However, without a real understanding of the text, it is impossible for a program to discover all grammatical, stylistic, diction and factual errors. </p>
      </div>
    
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingThree">
      <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           What updates will be in future to make it better?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <p>
          <strong>Textify</strong> will be improved it like add new fetures find text and replace with other, text formatter according to use like essay,letter and bullets graphs can we do in one click and AI based will be add soon.
        </p>
      </div>
    </div>
  </div>
</div>

         </div>
       </>   
  )
}
