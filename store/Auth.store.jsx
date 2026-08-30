import {create} from "zustand";
import {persist} from "zustand/middleware";

export const useAuth = create()(persist(
    (set)=>({
        isAuthenticated:false,
        user:null,
        authentication:(user)=>set({isAuthenticated:true,user:user}),
        logout:()=>set({isAuthenticated:false,user:null}),
    }),{name:"auth"}
))