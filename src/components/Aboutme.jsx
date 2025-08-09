import React from 'react'

const Aboutme = ({description}) => {
  return (
    <div className="aboutme-info text-center">
            <h2 className="pb-3 ">About me</h2>
            <div className="about-me-text px-5">
            {description.split("\n").map((line, index) => (
        line.trim() && <p key={index}>{line.trim()}</p>
      ))}
          </div></div>
  )
}

export default Aboutme