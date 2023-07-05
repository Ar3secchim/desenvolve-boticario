import { useRecoilValue } from "recoil"
import { resultadoDoAmigo } from "../atom"

export const useResultadoSorteio = ()=>{
  return useRecoilValue(resultadoDoAmigo)
}
