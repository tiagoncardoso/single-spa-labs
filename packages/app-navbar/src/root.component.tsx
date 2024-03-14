export default function Root(props) {
  const mainStyle =
    { background: "blue", color: "white", fontFamily: "Roboto", display: "flex", justifyContent: "center", alignItems: "center"}


  return <>
    <div style={mainStyle}>
      {props.name} is mounted! Aqui é o Navbar  :)
    </div>
  </>
}
