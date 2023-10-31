import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initionalState = { 
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: "",
    loadMore: 10,
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initionalState)

    value.closeAlert = () => {
        dispatch({type:'CLOSE_ALERT'})
    }

    value.removeFromBasket = (itemId) => {
        dispatch({type: "REMOVE_FROM_BASKET", payload: {id: itemId}})
    }

    value.handleBasketShow = () => {
        dispatch({type:'HANDLE_BASKET_SHOW'})
    }

    value.addToBasket = (item) => {
        dispatch({type:'ADD_TO_BASKET', payload: item})
    }

    value.loadMoreCards = () => {
        dispatch({type:'LOAD_MORE_CARDS'})
    }
    
    value.incrementItems = (itemId) => {
        dispatch({type:"INCREMENT_ITEMS", payload: {id: itemId}})
    }

    value.decrementItems = (itemId) => {
        dispatch({type:"DECREMENT_ITEMS", payload: {id: itemId}})
    }

    value.setGoods = (data) => {
        dispatch({type:'SET_GOODS', payload: data})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider> 
}