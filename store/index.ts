import {create} from 'zustand'

type UseNight = {
    night : boolean,
    increment:any,
    decrement:any
}

export const useNight = create<UseNight> ((set)=>({
    night:true,
    increment: () => set(() => ({ night: false })),
    decrement: () => set(() => ({ night: true })),
}))
