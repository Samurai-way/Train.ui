import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {TrainTypes} from "../types/trainTypes";

export interface TrainsState {
    trains: TrainTypes[],
    isLoading: boolean
    error: string
}

const initialState: TrainsState = {
    trains: [],
    isLoading: false,
    error: '',
}

export const trainSlice = createSlice({
    name: 'train',
    initialState,
    reducers: {
        fetchTrainsSuccess: (state, action: PayloadAction<TrainTypes[]>) => {
            state.isLoading = false
            state.error = ''
            state.trains = action.payload
        },
        trainsFetching(state) {
            state.isLoading = true
        },
        trainsFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload
        }
    },
})

export default trainSlice.reducer