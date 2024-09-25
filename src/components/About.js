import React from 'react'

function About(props) {
    
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#3e5975' : 'white'
    }

  return (
    <div className="accordion" id="accordionExample">
        <h1 className='my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>About Us</h1>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analayze your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analayze your text quickly and efficiently. Be it word count, character count or amount of time required to read
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is a free charatcer counter tool that provides instant character count and word count statistics for a given text.
                TextUtils reports the number of words and characters. Thus it is suitable for writing text with word / charatcer limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as Chrome, Firefox, Microsoft Edge, Safari, Opera. It suits to count characters in Facebook, Blog,
                Books, Excel documents, PDF documents, essay etc...  
            </div>
            </div>
        </div>
    </div>
  )
}

export default About;
