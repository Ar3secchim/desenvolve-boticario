import { atom } from "recoil";

export const listParticipantState = atom<string[]>({
  key:'listParticipantState',
  default: []
})

export const errorState = atom<string>({
  key: 'errorState',
  default:''
})