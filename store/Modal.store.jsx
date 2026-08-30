import {create} from "zustand";

export const useModal = create((set)=>({
    open:null,
    payload:[],
    setPayload:(payload)=>set({payload:payload}),
    openModal:(ModalName)=>set({open:ModalName}),
    closeModal:()=>set({open:null}),
}))
