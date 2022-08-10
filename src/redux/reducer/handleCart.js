const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case 'ADDITEM':
            const exist = state.find((x) => x.id === product.id)
            if (exist) {
                //increase the quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
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

            case 'DECREASEITEM':
            const exist2 = state.find((x) => x.id === product.id)
            if (exist2) {
                //increase the quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
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

        case 'DELITEM':
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty >= 1) {
                return state.filter((x) => x.id !== exist1.id)
            } else {
                return state.map((x) =>
                    x.id === product, id ? { ...x, qty: qty - 1 } : x
                );
            }
            break;

            case 'TOTALITEMS':
                let amount = 0;
                let total = 0;
                state.forEach(item => {
                    amount += item.qty
                    total += item.qty * item.price;
                })
                   state.qty = amount;
                   state.total = total 
                
        default:
            return state;
    }

}




export default handleCart;


