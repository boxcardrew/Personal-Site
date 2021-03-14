export default function Container({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0.5em 2em;
        }
        @media (max-width: 650px) {
          div {
            padding: 0.5em .75em;
          }
        }
      `}</style>
    </div>
  );
}
