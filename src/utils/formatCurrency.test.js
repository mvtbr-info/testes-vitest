// importar as ferramentas de teste.
// DESCRIBE  - descrição do teste (emb blocos)
// EXPECT    - o que se espera (resultado)
// IT        - (a coisa) o que vamos testar
import { describe, expect, it } from 'vitest'
// importar o arquivo para testar
import { formatCurrency } from './formatCurrency'

//descreve o teste
describe('formatCurrency', () => {
  describe('Quando valores forem válidos', () => {
    //teste 1
    it('deve formatar um numero inteiro - 100', () => {
        //toBe - o que se espera
        expect(formatCurrency(100)).toBe('R$ 100,00')
        expect(formatCurrency(0)).toBe('R$ 0,00')
        expect(formatCurrency(-10)).toBe('-R$ 10,00')
    })
    it('deve fornatar numero com casas decimais', () => {
        expect(formatCurrency(10.52)).toBe('R$ 10,52')
        expect(formatCurrency(10.526)).toBe('R$ 10,53')
        expect(formatCurrency(1952.52)).toBe('R$ 1.952,52')
    })
    //teste 3
    it('deve retornar o valor recebido como texto', () => {
        //NaN - Não é um número....
        expect(formatCurrency('10,52')).toBe('R$ NaN')
        expect(formatCurrency('10.52')).toBe('R$ 10,52')
    })
  })  
})