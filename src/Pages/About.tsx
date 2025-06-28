// import React from 'react'
import ParticlesBackground from "../Components/ParticlesBackground"

function About() {
  return (

    <div className="max-w-7xl mt-[100px] mx-auto">

      <div className="absolute -z-10"><ParticlesBackground /></div>
      <h1 className="scroll-m-20 text-[#FEFEFE] text-[16vw] md:text-[9vw] tracking-tight text-center font-pixelify mb-5 md:mb-0">
        About Us
      </h1>
      <div className="flex mb-5 md:mb-20">
        <h1 className='text-[#ccc] text-[15vh] font-pixelify text-center uppercase hidden md:block'
          style={{ textOrientation: "mixed", writingMode: 'vertical-lr' }}>
          Infotsav
        </h1>
        <div className="h-[125vh] w-[4rem] mr-10 bg-[#ccc] hidden md:block">
        </div>
        <div className="md:px-10 px-5">
          <h3 className='text-[#FEFEFE] text-3xl font-pixelify tracking-tight scroll-m-10 uppercase'>
            About Infotsav
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-white font-mono text-xl md:text-2xl">
            Infotsav is the flagship techno-managerial fest of Atal Bihari Vajpayee Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior. It is a vibrant celebration of technology, management, and innovation, designed to ignite creativity and foster a competitive spirit among students. With participants from top technical and managerial institutions across the region, Infotsav is a melting pot of diverse ideas and skills.
            Sponsored by leading tech companies, Infotsav stands out as a premier national-level technical festival. It offers a broad spectrum of events, from intense hackathons and challenging coding competitions to engaging quizzes and thought-provoking case studies. These events are meticulously crafted to test the participants' technical acumen, problem-solving abilities, and managerial skills.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-white font-mono text-xl md:text-2xl">
            Infotsav is more than just a competition; it's an opportunity to gain national exposure, connect with industry leaders, and showcase one's talents on a grand stage. Participants have the chance to compete for substantial prize money, but the real reward lies in the experience and the recognition that comes with excelling in such a prestigious event.
            Held from October 18th to 20th, Infotsav 2024 promises three days of high-octane competition, learning, and networking. Whether you're a coder, manager, developer, or thinker, Infotsav offers the perfect platform to embrace technology and creativity, challenge yourself, and emerge as a winner in both mind and spirit.
          </p>
        </div>
      </div>
      <div className="flex mb-5 md:mb-10">
        <div className="md:px-10 px-5">
          <h3 className='text-[#FEFEFE] text-3xl font-pixelify tracking-tight scroll-m-10 uppercase'>
            About ABV-IIITM
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-white font-mono text-xl md:text-2xl">
            Atal Bihari Vajpayee Indian Institute of Information Technology and Management, also known as Indian Institute of Information Technology and Management, is a higher-education institute located in Gwalior, Madhya Pradesh, India. Established in 1997 by Government of India, MHRD.It is an effort by MHRD towards creating professionals in areas of management and information technology from same institute.Initially started as IIITM,this institute was prefixed by ABV in 2002 to honour the then Prime Minister Atal Bihari Vajpayee
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-white font-mono text-xl md:text-2xl">
          </p>
        </div>
        <div className="h-[69vh] w-[4rem] ml-10 bg-[#ccc] hidden md:block">
        </div>
        <h1 className='text-[#ccc] text-[15vh] font-pixelify text-center uppercase hidden md:block'
          style={{ textOrientation: "mixed", writingMode: 'vertical-rl' }}>
          abv-iiitm
        </h1>
      </div>
    </div>
  )
}

export default About
