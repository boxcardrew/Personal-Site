export default function sectionSeparator({bgColor, hrHeight}) {
  return (
    <div
    style={{
      content: " ",
      background: bgColor,
      height: hrHeight,
      width: "100%",
      margin: "5em auto",

    }}
   />
  )}