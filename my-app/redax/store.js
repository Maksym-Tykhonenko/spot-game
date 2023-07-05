import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice  } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

//export const incrementLvl = createAction('myUnlockdLvl/increment')
//
//
//const initialLvl = 1;
//const lvlReducer = createReducer(initialLvl, (builder) => {
//  builder.addCase(incrementLvl, (state, action) => state + action.payload)
//})

const unlockedLevelsSlice = createSlice({
  name: 'unlockedLevels',
  initialState: null,
  reducers: {
    incrementLevel: (state, action) => state + action.payload,
  },
});

export const { incrementLevel } = unlockedLevelsSlice.actions;

export const saveCompletedLevels = (levels) => {
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem('completedLevels', JSON.stringify(levels));
      dispatch(incrementLevel(1));
    } catch (error) {
      console.log('Error saving completed levels:', error);
    }
  };
};

export const getCompletedLevels = () => {
  return async (dispatch) => {
    try {
      const levelsString = await AsyncStorage.getItem('completedLevels');
      const levels = JSON.parse(levelsString) || 1;
      dispatch(incrementLevel(levels));
    } catch (error) {
      console.log('Error getting completed levels:', error);
    }
  };
};

//////////// стор
export const store = configureStore({
    reducer: {
        myUnlockdLvl: unlockedLevelsSlice.reducer,
    },
});
/////////////////

