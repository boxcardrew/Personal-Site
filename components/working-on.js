export default function WorkingOn() {
  return (
    <div>
      <p>What kind of stuff do you make??</p>
      <p>I'm currently working on <a href="https://hey-junior.vercel.app/">HeyJunior</a>. A job site for junior everythings.</p>

      <style jsx>{`
        div {
          max-width: 18em;
          margin-bottom: 16em;
        }
        div p {
          font-size: 1.5em;
          font-weight: 700;
        }
        span {
          color: #9E6B07;
        }
        @media (max-width: 650px) {
          div {
            margin-bottom: 8em;
          }
        }
        `}</style>
    </div>
  )
}