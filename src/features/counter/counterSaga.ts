
import { takeLatest } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { incrementByAmount } from "./counterSlice"
function* handleIncrementSaga(action: PayloadAction<Number>) {

}
export default function* counterSaga() {
    yield takeLatest(incrementByAmount, handleIncrementSaga)
}