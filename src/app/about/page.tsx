import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
        <div>
          <h4>WHO I AM</h4>
          
          <div className='about'>
        <Image src="/Images/mypic.png" alt="profile picture" width={400} height={500} className='mypic'/>
        
        
        <p>I’m  Nousheen currently a student at GIAIC, where I’m exploring the fascinating worlds of Artificial Intelligence, Web 3.0, and the Metaverse.
          <br />
        <br /> Alongside this, I’m also enrolled in a certified Cloud Native Generative AI course with PIAIC, deepening my skills in the latest AI technologies. 
        <br />
        <br />Passionate about innovative tech, I’m driven to expand my expertise and make a meaningful impact in these cutting-edge fields.</p>
        </div>
        <div className='skills'>
        <br />
        <h4 data-aos="fade-down" >From Fundamentals to Future-Ready: My Journey in Tech</h4>
        <br />
        <div className="skills" data-aos="flip-up">
        <p >Passionate about Creating with Code: 
        I am on a journey through the world of web development and AI, driven by a love for problem-solving and building user-friendly experiences. With a foundation in HTML, CSS, and Python, I have expanded into TypeScript and Next.js, constantly honing my skills</p>
        <br />
        <p>Empowering Innovation with Tools & Technologies: 
        I am proficient in using Google Colab and AI platforms like GPT and Gemini, exploring the possibilities of generative AI to enhance user interactions and streamline development workflows. My goal is to merge these tools with web development to create efficient, cutting-edge projects</p>
        <br />
        <p >My Journey in Learning and Building: 
         As I delve deeper into the world of development, I aim to keep growing, learning, and building meaningful projects. From simple static websites to dynamic applications, every project adds a layer of understanding and expertise.</p>
        <br />
        <p>Bridging Development and E-Commerce: 
        Alongside my technical skills in web development, I have a strong foundation in e-commerce, particularly on platforms like Amazon and Shopify. I’m skilled in creating, optimizing, and managing online stores, combining my development expertise with a business-oriented mindset</p>
        <br />
        <p >Optimizing the Digital Shopping Experience:
         <br />
        With good knowledge of both Amazon and Shopify, I am excited about leveraging my development skills to create efficient, user-friendly e-commerce solutions. I understand the importance of a seamless shopping experience and am eager to merge technical and e-commerce expertise in future projects.</p>  
        </div>
  <br />
  <br />
  <div className="skills" data-aos="flip-up">
   <h3 >Google Colab</h3>
   <h3 >Python</h3>
   <h3 >TypeScript</h3>
   <h3 >React Js</h3>
   <h3 >Next Js</h3>
   <h3 >Tailwind</h3>
   <h3 >CSS</h3>
   <h3 >Node Js</h3>
   <h3 >HTML</h3>
</div>
    </div>
      </div>
  )
}

export default page
