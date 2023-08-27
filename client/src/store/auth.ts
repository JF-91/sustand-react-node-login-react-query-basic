import { create } from "zustand"
import { persist } from "zustand/middleware"



interface PropStatePersis{
    token: string;
    profile: any;
    setToken: (token: string)=> void;
    setProfile: (profile: any)=> void;
}


export const useAuthStore = create(persist<PropStatePersis>( (set)=>({
    token: "",
    profile: null,
    setToken: (token:string)=> set( (state)=>({
        token
        
        
    } 
    ) ),
    setProfile: (profile: any)=> set((state=>({
        profile
    })))
}), {name:"auth"} ))