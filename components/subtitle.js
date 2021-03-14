import { useEffect, useState } from "react";

export default function Subtitle() {

  const [time, setTime] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const options = { timeZone: 'America/Phoenix', hour: '2-digit', minute: '2-digit' }
    const currentTime = currentDate.toLocaleTimeString('en-US', options)
    setTime(currentTime)
  }, [])

  return (
    <div className="flex">
      <div className="info">
        <span>
          <a href="mailto:bray.drew@gmail.com">bray.drew@gmail.com</a>
        </span>
        <h2>-Front-End Developer</h2>
        <h2>-Design Engineer</h2>
      </div>
      <div className="intro">
        <div>
          <p>Hi, I'm Drew.</p>
          <p>
            Based in Phoenix, AZ <span className="time">{time}</span>
          </p>
        </div>
        <div>
          <p>Want to work together?</p>
          <span>
            <a href="mailto:bray.drew@gmail.com">Send me a message</a>
          </span>
        </div>
      </div>
      <style jsx>{`
        .time {
          color: #9E6B07;
        }
        .flex {
          display: flex;
          align-items: center;
          width: 100%;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .info {
          margin-bottom: 2em;
        }
        .info h2 {
          margin-bottom: 0;
          margin-top: 0;
        }
        .info span {
          display: inline-block;
          margin-bottom: 1em;
        }
        .info a {
          text-decoration: underline;
          color: #000;
        }
        .intro div {
          margin-bottom: 1em;
        }
        .intro p {
          font-size: 1.125em;
          font-weight: 500;
          margin-bottom: 0;
          margin-top: 0;
        }
        .intro a {
          font-size: 1.125em;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
