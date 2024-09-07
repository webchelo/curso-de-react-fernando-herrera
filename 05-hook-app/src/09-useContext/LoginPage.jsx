import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext );



  return (
    <>
        <h1>LoginPage</h1>
        <hr />
        <button onClick={() => setUser({ name: 'chelo', id: 123, email: 'chelo@test.com' })}>Establecer usuario</button>
    </>
  )
}
