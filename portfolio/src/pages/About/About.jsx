import React from 'react'
import './About.css'

const PDF_FILE_URL ='http://localhost:5173/file_pdf.pdf'
export default function About() {
  const downloadFileAtURL=(url)=>{
    const fileName= url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag);
    aTag.click()
    aTag.remove()
  }
  return (
    <div className='body2'>
      {/* <br></br> */}
  
    <div className='hero2'>
    <div className='part1'>
    <h2>Skills</h2>
    <ul className='uli'>
      <li> Web design </li>
      <li> Design Thinking, Figma</li>
      <li> HTML, CSS, JavaScript</li>
      <li> Front End Coding</li>
      <li> React.js, Redux NodeJS, MySQL</li>
      <li> Git,GitHub,RestAPI</li>
      <li>Strong Communication</li>
      <li>Accuracy and attention to detail</li>
      <li>English - B2</li>
    </ul>
    </div>
    <div className='part2'>
    <h2>Courses</h2>
    <ul>
  <li><p className='course'>Algorithmics #CODEFORFUTURE</p></li>
  <p className='name'> Frontend-Developer (256 hours)</p>
  <p className='date'>09.22-12.22</p>
  <br></br>
  <li><p className='course'>IKT LAB/ Cisco networking Academy </p></li>
  <p className='name'>Principles of IT / CompTIA+ (48 hours)</p>
  <p className='date'>02.22-05.22 </p>
  </ul>
  </div>

<div clasName="App">
  <button onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>Get my <i className="fa-regular fa-file fa-beat"></i></button>
</div>
</div>
    </div>
  )
}
