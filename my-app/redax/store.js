import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const incrementLvl = createAction('myUnlockdLvl/increment')

 
const initialLvl = 5;
const lvlReducer = createReducer(initialLvl, (builder) => {
  builder.addCase(incrementLvl, (state, action) => state + action.payload)
})
//////////// стор
export const store = configureStore({
    reducer: {
        myUnlockdLvl: lvlReducer
    },
});
/////////////////