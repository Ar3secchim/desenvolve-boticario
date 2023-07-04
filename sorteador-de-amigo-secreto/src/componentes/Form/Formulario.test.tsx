import { act, fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Form from "./Formulario";


describe('Comportamento do formulário', ()=>{
    test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )
    
        // encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        // encontrar o botão
        const botao = screen.getByRole('button')
        // garantir que o input esteja no documento
        expect(input).toBeInTheDocument()
        // garantir que o botão esteja desabilitado
        expect(botao).toBeDisabled()
    })
    
    test('quando adicionar um participante caso exista um nome preenchido', () =>{
        render( 
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )
        
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')
    
        fireEvent.change(input, {
            target:{
                value: 'Renara'
            }
        })
    
        fireEvent.click(botao)
        expect(input).toHaveFocus()
        expect(input).toHaveValue('')
    })
    
    test('Nomes duplicados', ()=>{
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')
    
        fireEvent.change(input, {
            target:{
                value: 'Renara'
            }
        })
        fireEvent.click(botao)
    
        fireEvent.change(input, {
            target:{
                value: 'Renara'
            }
        })
        fireEvent.click(botao)
        const msgError = screen.getByRole('alert')
        expect(msgError.textContent).toBe('Nomes Duplicados não são permitidos')
    })
    
    test('a msg de error deve desaparecer', ()=>{
        jest.useFakeTimers()
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        )
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const botao = screen.getByRole('button')
    
        fireEvent.change(input, {
            target:{
                value: 'Renara'
            }
        })
        fireEvent.click(botao)
    
        fireEvent.change(input, {
            target:{
                value: 'Renara'
            }
        })
        fireEvent.click(botao)
        let msgError = screen.queryByRole('alert')
        expect(msgError).toBeInTheDocument()
        
        act(() => {
            jest.runAllTimers()
        });
          
    
        msgError = screen.queryByRole('alert')
        expect(msgError).toBeNull()
    })
})
