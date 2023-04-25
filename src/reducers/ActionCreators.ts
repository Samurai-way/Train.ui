import axios from "axios";
import {AppDispatch} from "../store/store";
import {trainSlice} from "./TrainSlice";


export const fetchTrain = async (fromPlace: string, toPlace: string, dispatch: AppDispatch): Promise<any> => {
    try {
        const response = await axios.get(`https://trainapi-production.up.railway.app/train`, {
            params: {
                fromPlace,
                toPlace,
            },
        });
        dispatch(trainSlice.actions.fetchTrainsSuccess(response.data))
    } catch (e: any) {
        throw new Error(e.message);
    }
};
