import lodash from 'lodash'

const initialState = {
    busket: {
        totalPrice: 0,
        discount: 0,
        products: [],
        name: ''
    },

    summary: {

    },
    holdBuskets: [],
    products: [
        { id: 1, name: 'pen', rate: 10 },
        { id: 2, name: 'book', rate: 340 },
        { id: 3, name: 'laptop', rate: 51900 },
        { id: 3, name: 'phone', rate: 19500 },
        { id: 4, name: 'beer', rate: 850 }
    ],

    completedOrders: []
}

const reducer = (state = initialState, action) => {
    let busketCopy = lodash.cloneDeep(state.busket)
    switch (action.type) {
        case 'HOLD':
            return {
                ...state,
                busket: initialState.busket,
                holdBuskets: state.holdBuskets.concat(action.hold)
            };
        case "LOAD_BUSKET":
            return {
                ...state,
                busket: action.busket,
                holdBuskets: state.holdBuskets.filter(busket => busket.id !== action.busket.id)
            };

        case 'ADD_TO_BUSKET':
            const index = state.busket.products.findIndex((item) => {
                return item.id === action.item.id
            })

            let item = action.item;

            if (index === -1) {
                item.quantity = 1;
                let busket = lodash.cloneDeep(state.busket)
                busket.totalPrice += item.rate;
                busket.products.push(item)
                return {
                    ...state,
                    busket: busket
                };
            } else {
                let busket = lodash.cloneDeep(state.busket)
                busket.products[index].quantity += 1;
                item.quantity += 1;
                busket.totalPrice += item.rate;
                return {
                    ...state,
                    busket: busket
                };
            }
        case 'UPDATE_DISCOUNT':
            let busket = lodash.cloneDeep(state.busket)
            busket.discount = action.discount;
            return {
                ...state,
                busket: busket
            }
        case 'PAYMENT_DONE':
            return {
                ...state,
                busket: initialState.busket,
                completedOrders: state.completedOrders.concat(action.item)
            }
        case 'NAME_UPDATE':
        busketCopy.name = action.name;
            return {
                ...state,
                busket: busketCopy
            }
        default:
            return state;
    }
}

export default reducer;
