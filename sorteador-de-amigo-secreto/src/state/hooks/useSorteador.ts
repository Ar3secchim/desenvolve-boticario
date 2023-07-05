import { useListaParticipantes } from "./useListaParticipantes"
import { useSetRecoilState } from "recoil"
import { resultadoDoAmigo } from "../atom"
import realizaSorteio from "../helpers/realizaSorteio"

export const useSorteador = () =>{
  const participantes = useListaParticipantes()
  const setResultado = useSetRecoilState(resultadoDoAmigo)
  
  return ()=>{
    const resultado = realizaSorteio(participantes)
    setResultado(resultado)
  }
}