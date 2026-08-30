import {create} from "zustand";


export const profileSidebarStore = create((set)=>({
    sidebarOpen: false,
    openSidebar:()=>set({sidebarOpen:true}),
    closeSidebar:()=>set({sidebarOpen:false}),
}))