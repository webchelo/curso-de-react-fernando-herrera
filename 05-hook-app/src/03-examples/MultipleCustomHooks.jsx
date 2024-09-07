import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { LoadingMessage } from "./LoadingMessage"
import { PokemonCard } from "./PokemonCard"

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement} = useCounter()
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`)


  return (
    <>
        <h1>Información de pokemon</h1>
    
        <hr />

        { isLoading ?
            <LoadingMessage /> :
            <PokemonCard
                id={counter}
                name={data.name}
                sprites={[
                    data.sprites.front_default,
                    data.sprites.front_shiny,
                    data.sprites.back_default,
                    data.sprites.back_shiny,
                ]}/>
            }

  

        <button
            className="btn btn-primary mt-2"
            onClick={ () => counter > 1 ? decrement() : null }
        >
            Anterior
        </button>

        <button  
           className="btn btn-primary mt-2"
           onClick={ () => increment() }
        >
            Siguiente
        </button>
    </>
  )
}
