import { all } from "@redux-saga/core/effects";
export default function* rootSaga() {
    console.log('Root saga');

    yield all([])

}