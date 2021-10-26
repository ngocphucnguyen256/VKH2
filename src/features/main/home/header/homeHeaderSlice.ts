import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../../app/store';


export interface HomeHeaderState {
    currentImage: number,
}

const initialState: HomeHeaderState = {
    currentImage: 0
}
export const homeHeaderSlice = createSlice({
    name: "homeheaderSlice",
    initialState,
    reducers: {

        nextImage: (state, action: PayloadAction<number>) => {
            state.currentImage = action.payload + 1

        },
        backImage: (state, action: PayloadAction<number>) => {
            state.currentImage = action.payload - 1
        }

    }
})
//selectors
export const homeHeaderSelectors = (rootState: RootState) => rootState.homeHeader;
// actions
export const homeHeaderActions = homeHeaderSlice.actions;
// reducer
const homeHeaderReducer = homeHeaderSlice.reducer;
export default homeHeaderReducer;