import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../../../app/store";
import { PATH_ROOT } from "../../../../../constants";

export interface NavBarState {
    pathActive: string
}
var initialState: NavBarState = {
    pathActive: PATH_ROOT
}
var navBarSlice = createSlice({
    name: "navBarSlice",
    initialState,
    reducers: {
        PushTo: (state, action: PayloadAction<string>) => {
            state.pathActive = action.payload
        }
    }
})
// actions
export var navBarActions = navBarSlice.actions
// selectors
export var navBarSelectors = (state: RootState) => state.navBar
//reducers
var navBarReduces = navBarSlice.reducer
export default navBarReduces;
