import { useRef, useState } from "react"
import { useAddParticipante } from "../../state/hooks/useAddParticipante"
import { UseMsgError } from "../../state/hooks/useMsgError"

const Form = () => {
	const [nome, setNome] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)
	const add = useAddParticipante()
	const msgError = UseMsgError()

	const addParticipante = (event : React.FormEvent<HTMLFormElement>) =>{
		event.preventDefault()
		add(nome)
		setNome('')
		inputRef.current?.focus()
	}

	return (
	<form onSubmit={addParticipante}>
		<input 
			ref ={inputRef}
			value={nome}
			onChange={event => setNome(event.target.value)}
			type="text" 
			placeholder="Insira os nomes dos participantes"/>


		<button disabled={!nome}>Adicionar</button>
		{msgError && <p role="alert" >{msgError}</p> }
	</form>
	)
}

export default Form