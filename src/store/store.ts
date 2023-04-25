import {combineReducers, configureStore} from "@reduxjs/toolkit";
import trainReducer from '../reducers/TrainSlice'
const rootReducer = combineReducers({
    trainReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']