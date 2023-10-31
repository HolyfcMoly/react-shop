export function reducer(state, { type, payload }) {
    
    switch (type) {
        case "CLOSE_ALERT":
            return {
                ...state,
                alertName: "",
            };
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                order: state.order.filter((el) => el.mainId !== payload.id),
            };
        case "HANDLE_BASKET_SHOW":
            return {
                ...state,
                isBasketShow: !state.isBasketShow,
            };
        case "ADD_TO_BASKET": {
            const itemIndex = state.order.findIndex(
                (el) => el.mainId === payload.mainId
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1,
                };
                newOrder = [...state.order, newItem]
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder,
                alertName: payload.displayName
            }
        };
        case "LOAD_MORE_CARDS":
            return {
                ...state,
                loadMore: state.loadMore + 10,
            };
        case "INCREMENT_ITEMS":
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.id) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    }
                    return el;
                }),
            };
        case "DECREMENT_ITEMS":
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.id) {
                        const newQuantity =
                            el.quantity <= 1 ? el.quantity : el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    }
                    return el;
                }),
            };
        case "SET_GOODS":
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        default:
            return state;
    }
}
