
export default function Nav({ open, setOpen }) {

  return (
    <div>
      <button className="button" onClick={() => setOpen(!open)}>{open ? "Close" : "Contact"}</button>
      <style jsx>{`
        div {
          display: flex;
          justify-content: flex-end;
          margin-top: 1em;
        }
        `}</style>
    </div>
  )
}