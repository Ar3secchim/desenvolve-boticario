import { atom } from "recoil";

export const listParticipantState = atom<string[]>({
  key:'listParticipantState',
  default: []
})

export const errorState = atom<string>({
  key: 'errorState',
  default:''
})

export const resultadoDoAmigo = atom<Map<string, string>>({
  key: 'resultadoDoAmigo',
  default: new Map()
})