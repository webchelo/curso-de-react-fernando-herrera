import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en <CounterApp />', () => {
    const value = 10
    test('debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={ value } />)
        expect(container).toMatchSnapshot();
    })
    test('debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value={ 100 } />)
        expect(screen.getByText(100)).toBeTruthy();
    })
    test('debe incrementar con el boton +1', () => {
        render(<CounterApp value={ value } />)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
    })
    test('debe decrementar con el boton -1', () => {
        render(<CounterApp value={ value } />)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy();
    })
    test('debe funcionar el boton de reset', () => {
        render(<CounterApp value={ 855 } />)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        //fireEvent.click(screen.getByText('reset'))
        //expect(screen.getByText(855)).toBeTruthy();
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
        expect(screen.getByText(855)).toBeTruthy();
    })
})