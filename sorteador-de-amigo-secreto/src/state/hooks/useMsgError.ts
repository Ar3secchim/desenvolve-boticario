import { useRecoilValue } from "recoil"
import { errorState } from "../atom"

export const UseMsgError= ()=>{
  const msg = useRecoilValue(errorState)
  return msg
}