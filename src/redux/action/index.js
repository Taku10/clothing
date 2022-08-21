//Add item to cart
export const addCart = (product)=>{
    return{
        type: 'ADDITEM',
        payload: product
    }
}



//Delete item to cart
export const delCart = (product)=>{
    return{
        type: 'DELITEM',
        payload: product
    }
}

export const decreaseCart = (product)=>{
    return{
        type: 'DECREASEITEM',
        payload: product
    }
}


//Add item to wish list
export const addWish = (product)=>{
    return{
        type: 'ADDWISH',
        payload: product
    }
}



//Delete item to cart
export const delWish = (product)=>{
    return{
        type: 'DELWISH',
        payload: product
    }
}

