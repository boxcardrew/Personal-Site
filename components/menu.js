import { useState } from "react"

export default function Menu() {

  return (
    <div>
      <ul>
        <li><a href="mailto:bray.drew@gmail.com" className="button">Email Me</a></li>
        <li><a href="sms://+14805240137" className="button">Text Me</a></li>
        <li><a href="https://twitter.com/boxcardrew" className="button">Twitter</a></li>
      </ul>
      <style jsx>{`
        div {
          min-height: 100vh;
          display: grid;
          place-items: center;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 5em;
        }
        .button {
          min-width: 20ch;
        }
        
        `}</style>
    </div>
  )
}