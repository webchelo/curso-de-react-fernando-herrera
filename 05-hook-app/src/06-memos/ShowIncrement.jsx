export const ShowIncrement = ({ increment }) => {

    console.log('me volví a generar :(')

  return (
    <button
        className="btn btn-primary"
        onClick={() => {
            increment(5)
        }}
    >Incrementar</button>
  )
}
