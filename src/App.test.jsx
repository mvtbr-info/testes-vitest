
import { beforeEach, describe, expect, it, vi } from "vitest";

import { render, screen, waitFor } from '@testing-library/react';

import userEvent from "@testing-library/user-event";

import App from './App';

import * as productService from './services/productService';

import { productsMock } from './tests/mocks/products';

vi.mock('./services/productService', () => ({
    getProducts: vi.fn()
}))

describe('App', () =>  {
    beforeEach(() => {
        //... limpamos os mocks, recomeçando do zero.
        vi.clearAllMocks()
    })

    describe('Layout', () => {
        it('Deve renderizar o cabeçalho e o form de pesquisa', async () => {
            //chamamos o serviço (productService)
            //chamamos a função (getProducts)
            //mockamos os resultados do que seria a requisição
            //neste caso, consideramos que os produtos estão carregados                        
            productService.getProducts.mockResolvedValue(productsMock)
            //renderizamos o componente
            render(<App />)

            //esperamos que o cabeçalho seja renderizado
            //heading - cabeçalho (header)
            expect(screen.getByRole('heading', 
            //dentro dele, e texto
                { name: 'Catálogo de Produtos'}))
            //e se este texto aparece em tela    
            .toBeInTheDocument()

            //verificar o paragramo do form
            expect(screen.getByRole('textbox', {
                name: /pesquisar produto/i
            })).toBeInTheDocument()
        })
        it('Carregamento', () => {
            //mock para forçar o carregamento
            // (aguardando o retorno da Promise)
            productService.getProducts.mockResolvedValue(
                new Promise(() => {})
            )
            //renderizamos o componente    
            render(<App />)

            expect(screen.getByRole('status'))
                .toHaveTextContent('Carregando produtos...')
        })
    })
})