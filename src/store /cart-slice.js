import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartInitialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addItemToCart(state, action) {
            console.log(action);
            console.log(state);
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.price
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }

            console.log(state.items);
        },
        removeItemFromCart(state, action) {
            const id = action.payload.id;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price
            }
        }
    }
});

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotifications({
            status: 'pending',
            title: 'sending...',
            message: 'Sending cart data'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-http-de395-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if (!response?.ok) {
                throw new Error('Sending cart data failed');
            }
        };

        try {
            await sendRequest();
            dispatch(uiActions.showNotifications({
                status: 'success',
                title: 'success',
                message: 'Sent cart data successfully'
            }));
        } catch (error) {
            dispatch(uiActions.showNotifications({
                status: 'error',
                title: 'error',
                message: 'Sent cart data failed'
            }));
        }
    };
};

export const cartActions = cartSlice.actions;

export default cartSlice;