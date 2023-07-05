import { useRecoilValue } from "recoil"
import { listParticipantState } from "../atom"

export const useListaParticipantes = () =>{
  return useRecoilValue(listParticipantState)
}