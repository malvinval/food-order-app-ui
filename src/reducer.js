export default function reducer(state = [], action) {
    if (action.type === "ADD_TO_CART") {
        return [
            ...state,
            {
                menuName: action.payload.menuName,
                menuDesc: action.payload.menuDesc,
                menuQty: action.payload.menuQty,
                menuPrice: action.payload.menuPrice
            }
        ]
    } else if (action.type === "CLEAR_CART") {
        state = []
    }

    return state;
}