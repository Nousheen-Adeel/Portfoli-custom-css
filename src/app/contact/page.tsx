import React from 'react'

const page = () => {
  return (
    <div>
      <section className="contact text-gray-600 body-font h-[700px] mt-[-60px]">
  <div className="con container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="iframe lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      />
      <div className="form bg-white relative py-6 rounded shadow-md w-full">
        <div className="lg:w-3/4 px-2">
          <h3>
            ADDRESS
          </h3>
          <p className="mt-1">
            Abul Hassan Isphahani Road, Karachi, Pakistan.
          </p>
        </div>
        <div className="lg:w-3/4 px-2 mt-4 lg:mt-0">
          <h3>
            EMAIL
          </h3>
          <h1>nousheenfatimaadeel@gmail.com</h1>
          <h3>
            PHONE
          </h3>
          <p className="leading-relaxed">0334-3887219</p>
        </div>
      </div>
    </div>
    <div className='form space-y-8' >
        <h3>FEED BACK</h3>
        <p>We value your feedback and would love to hear from you! Whether you have suggestions, questions, or just want to say hello, feel free to reach out.
        <br />Please fill out the form below with your email and message, and we will get back to you as soon as possible. Your input helps us improve and provide a better experience.
        <br />Thank you for taking the time to connect with us.</p>
        <div className='name'>
        <label htmlFor="name">Name</label>
        <input placeholder="Enter your name" type="text"  />
        </div>
        <div className='name'>
        <label htmlFor="">Email</label>
        <input placeholder="Enter your e-mail address" type="text" />
        </div>
        <div className='name'>
        <label htmlFor="">Message</label>
        <textarea placeholder="Enter your message here"/>
        </div>
        <button className='btn'>Submit</button>
    </div>
  </div>
</section>

    </div>
  )
}

export default page
