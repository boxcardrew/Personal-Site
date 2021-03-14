export default function Title() {
  return (
    <div>
      <h1>I make stuff on the internet.</h1>
      <style jsx>
        {`
          div {
            max-width: 302px;
          }
          h1 {
            font-size: 4.5em;
            line-height: 1.1;
            font-weight: 900;
          }
          @media (max-width: 450px) {
            h1 {
              font-size: 3.5em;
            }
          }
        `}
      </style>
    </div>
  );
}
