export function addToCart(selectedMenuName, selectedMenuDesc, selectedMenuQty, selectedMenuPrice) {
    return {
        type: "ADD_TO_CART",
        payload: {
            menuName: selectedMenuName,
            menuDesc: selectedMenuDesc,
            menuQty: selectedMenuQty,
            menuPrice: selectedMenuPrice
        }
    }
}