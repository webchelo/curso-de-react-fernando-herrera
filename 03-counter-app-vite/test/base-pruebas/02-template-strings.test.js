import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebase en el archivo 02-template-strings', () => {
    test('getSaludo debe retornar "Hola Marcelo"', () => {
        const name = "Marcelo";

        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    })
})