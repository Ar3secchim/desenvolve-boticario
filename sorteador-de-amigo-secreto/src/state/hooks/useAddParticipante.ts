import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, listParticipantState } from "../atom"

export const useAddParticipante = () => { 
  const setLista = useSetRecoilState(listParticipantState)
  const lista = useRecoilValue(listParticipantState)
  const setError = useSetRecoilState(errorState)

  return (nameParticipante: string)=>{
    if(lista.includes(nameParticipante)){
      setError('Nomes Duplicados não são permitidos')
      setTimeout(()=>{
        setError('')
      },5000)
      return
    }
    return setLista(listaAtual => [...listaAtual, nameParticipante])
  }
}