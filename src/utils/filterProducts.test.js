// importar as ferramentas de teste.
// DESCRIBE  - descrição do teste (emb blocos)
// EXPECT    - o que se espera (resultado)
// IT        - (a coisa) o que vamos testar
import { describe, expect, it } from 'vitest'
// importar o arquivo para testar
import { filterProducts } from './filterProducts'
//importar o mock 
import { productsMock } from '../tests/mocks/products'

//descreve o teste
describe('filterProducts', () => {
  describe('Quando houver termo de busca', () => {  
    it('deve retornar somente os produtos correspondentes', () => {
        const result = filterProducts(productsMock, 'Notebook')
        const result2 = filterProducts(productsMock, 'notebook')

        expect(result).toHaveLength(1)

        expect(result[0].title).toBe('Notebook')
        expect(result2[0].title).toBe('Notebook')
    })
    it('Deve aceitar pesquisa parcial', () => {
        const result = filterProducts(productsMock, 'mous')
        expect(result).toHaveLength(1)
        expect(result[0].title).toBe('Mouse Gamer')
    })
  }) 
  describe('Quando não houver termo de busca', () => {  
    it('Deve retornar a lista original', () => {
        expect(filterProducts(productsMock, '')).toEqual(productsMock)
    })

    it('Deve desconsiderar espaços em branco', () => {
        expect(filterProducts(productsMock, ' ')).toEqual(productsMock)
    })
  })  

})