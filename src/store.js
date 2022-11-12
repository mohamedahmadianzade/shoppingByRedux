import { configureStore } from '@reduxjs/toolkit'
import ShoppingCartSlice from './components/shopping/shoppingCartSlice'
const store = configureStore({
    reducer: {
        shoppingCart: ShoppingCartSlice.reducer
    }
})
export default store