import React from 'react'
import './App.css'
import Typewriter from 'typewriter-effect';
function App() {
  return (
    <div className='body'>
      <div className='hero'>
      <div className='left'>
      <h1>
        <Typewriter
        
        options={{
          autoStart: true,
          loop:true,
          delay:50,
          strings: ["I am Frontend Developer"]
        }}
        />
        </h1>
        <p className='description'> Hello ! It' s me Imanova Tunzala. I am a hard working individual with interest in programming field. I have strong creative and analytical skills.
          I am team player with an eye for detail. Experiences have taught me to take accessibility and responsiveness seriously,
         and I am excited to start my career at Frontend Developer.</p>
          <br></br>
          <div className='icons'>
          <a href="mailto: tunzaleimanova03@mail.ru"><i className="fa-solid fa-at fa-bounce fa-2x"></i></a>
          <a href="tel: +994506339658"><i className="fa-brands fa-whatsapp fa-bounce fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/t%C3%BCnzal%C9%99-imanova-030500208/"><i className="fa-brands fa-linkedin fa-bounce  fa-2x"></i></a>
          <a href="https://github.com/Tunzale1"><i className="fa-brands fa-github fa-bounce  fa-2x"></i></a>
          </div>
          </div>
    
          <img className='image' src="https://img.freepik.com/premium-vector/woman-working-laptop_478440-278.jpg?w=740"></img>
         </div>

    </div>
  )
}

export default App