import Container from './container';

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/boxcardrew"
  },
  {
    name: "CodePen",
    url: "https://codepen.io/boxcardrew"
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/boxcardrew"
  }, 
  {
    name: "Twitter",
    url: "https://twitter.com/boxcardrew"
  },
]

export default function Footer() {
  return (
    <footer>
      <Container>
        <div>
          <h6>Get In Touch</h6>
          <div className="email">
            <span><a href="mailto:bray.drew@gmail.com">bray.drew@gmail.com</a></span>
          </div>
          <div className="socials">
            {socials.map(social => <span key={social.name} className="social" ><a href={social.url}>{social.name}</a></span>)}
          </div>
          <div className="cr">
          <span>© 2021 - Drew Bray</span>
          </div>
        </div>
      </Container>
      <style jsx>{`
        footer {
          background: #000;
          color: #fff;
        }
        h6 {
          font-size: 3em;
          margin-bottom: .5em;
          margin-top: 2em;
        }
        
        .email, .socials {
          margin-bottom: 2em;
        }
        .cr {
          margin-bottom: 4em;
        }
        .social {
          margin-right: 1em;
        }
        .email a {
          text-decoration: underline;
        }
        a {
          color: #fff;
        }
        @media (max-width: 650px) {
          h6 {
            font-size: 1.75em;
          }
        }
        `}</style>
    </footer>
  )
}