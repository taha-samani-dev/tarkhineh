
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create((
  persist(
    (set) => ({
      carts: {},
    
      addFood: (branchName, Food) =>
        set((state) => {
          const currentCart = state.carts[branchName] || [];
          const existing = currentCart.find((i) => i.id === Food.id);
          const newCart = existing
            ? currentCart.map((i) =>
                i.id === Food.id ? { ...i, quantity: i.quantity + 1 } : i
              )
            : [...currentCart, { ...Food, quantity: 1 }];
          return {
            carts: { ...state.carts, [branchName]: newCart },
          };
        }),
        
      removeFood: (branchName, FoodId) =>
        set((state) => {
          const currentCart = state.carts[branchName] || [];
          const food = currentCart.find((i)=>i.id===FoodId)
          const newFood = {...food, quantity:food.quantity-1}
          if (food.quantity===1) {
            return {
            carts: {
              ...state.carts,
              [branchName]: [...currentCart.filter((i) => i.id !== FoodId)],
            }}
          }
          return {
            carts: {
              ...state.carts,
              [branchName]: [...currentCart.filter((i) => i.id !== FoodId), newFood],
            },
          };
        }),
      clearFood: (branchName, FoodId)=>
        set((state)=>{
          const currentCart = state.carts[branchName] || [];
          return {
            carts: {
              ...state.carts,
              [branchName]: [...currentCart.filter((i) => i.id !== FoodId)],
            }}
        }),
      clearCart: (branchName) =>
        set((state) => ({
          carts: {
            ...state.carts,
            [branchName]: [],
          },
        })),
    }),
    { name: 'carts' }
  )
))