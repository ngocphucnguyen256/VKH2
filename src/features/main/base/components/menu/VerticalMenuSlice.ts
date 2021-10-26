import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../../../app/store'

export interface VerticalMenuState {
    listExpand?: number[],
    onClickMenu?: ClickMenuDTO
}
export interface ClickMenuDTO {
    key: string,
    value: string,
    time: number,
    type: 'scroll' | 'push'

}
const initialState: VerticalMenuState = {
    listExpand: [],
}

export const verticalMenuSlice = createSlice({
    name: "verticalMenu",
    initialState,
    reducers: {
        handleExpandCollapse: (state, action: PayloadAction<number>) => {
            if (state.listExpand?.indexOf(action.payload) !== -1) {
                // da co trong list => remove
                state.listExpand?.splice(state.listExpand?.indexOf(action.payload), 1)
            } else {
                state.listExpand.push(action.payload)
            }
        },
        onClickMenu: (state, action: PayloadAction<ClickMenuDTO>) => {
            state.onClickMenu = action.payload
        }
    }
})
// selectors
export const verticalMenuSelector = (rootState: RootState) => rootState.verticalMenu
// actions
export const verticalMenuActions = verticalMenuSlice.actions;
// reducers
const verticalMenuReducer = verticalMenuSlice.reducer;
export default verticalMenuReducer;