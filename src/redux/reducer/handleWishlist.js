const wishList = [];

const handleWishList = (state = wishList, action) => {
    const product = action.payload;
    console.log(product)
    switch (action.type) {
        case 'ADDWISH':
            const exist4 = state.find((x) => x.id === product.id)
            if (exist4) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty } : x
                );
            } else {
                const product = action.payload
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }
            break;

           

        case 'DELWISH':
            const exist3 = state.find((x) => x.id === product.id);
            console.log(exist3);
            if (exist3.qty ===1 ) {
                return state.filter((x) => x.id !== exist3.id)
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: qty - 1 } : x
                );
            }
            break;
    
        default:
            return state;
    }

}




export default handleWishList;
