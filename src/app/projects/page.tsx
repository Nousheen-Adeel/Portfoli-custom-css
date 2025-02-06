import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div>
      <h4 className='heading'>My Projects</h4>
      <div className='project space-y-4'>
        <h3 className='pro'> These are some of my Projects below</h3>
        <p >I have developed a series of projects using TypeScript that showcase my growing skills in web development and application design. These projects reflect practical applications that solve everyday problems, ranging from managing finances to enhancing productivity. Each project highlights my ability to create interactive, user-friendly tools with clean code and effective functionality.</p>
      </div>
      <div className='main'>
        <div className='card'>
            <Image src="/Images/atm.png" alt="image" width={200} height={200} className="cardimg"/>
            <h3 className='detail' >ATM Machine</h3>
            <p className='detail'>A simple ATM simulation that allows users to perform basic banking transactions.</p>
            <div className='tagbtn'>
                <button className='tag'>TypeScript</button>
                <button className='tag'>React</button>
                <button className='tag'>Html</button>

            </div>
        </div>
        <div className='card'>
            <Image src="/Images/currency.png" alt="image" width={200} height={200} className="cardimg"/>
            <h3 className='detail'>Currency Converter</h3>
            <p className='detail'>Converts values between different currencies using real-time exchange rates.</p>
            <div className='tagbtn'>
                <button className='tag'>TypeScript</button>
                <button className='tag'>React</button>
                <button className='tag'>Html</button>

            </div>
        </div>
        <div className='card'>
            <Image src="/Images/word.png" alt="image" width={200} height={200} className="cardimg"/>
            <h3 className='detail'>Word Counter</h3>
            <p className='detail'>A tool that counts words and characters in a text input.</p>
            <div className='tagbtn'>
                <button className='tag'>TypeScript</button>
                <button className='tag'>React</button>
                <button className='tag'>Html</button>

            </div>
        </div>
        <div className='card'>
            <Image src="/Images/calculator.png" alt="image" width={200} height={200} className="cardimg"/>
            <h3 className='detail'>Calculator</h3>
            <p className='detail'>A fully functional calculator for performing arithmetic operations.</p>
            <div className='tagbtn'>
                <button className='tag'>TypeScript</button>
                <button className='tag'>React</button>
                <button className='tag'>Html</button>

            </div>
        </div>
        <div className='card'>
            <Image src="/Images/todo.png" alt="image" width={50} height={50} className="cardimg"/>
            <h3 className='detail'>To-Do List</h3>
            <p className='detail'>A task management application that helps users organize and track their daily activities.</p>
            <div className='tagbtn'>
                <button className='tag'>TypeScript</button>
                <button className='tag'>React</button>
                <button className='tag'>Html</button>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
