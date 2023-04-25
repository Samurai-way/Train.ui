import axios, { AxiosInstance, AxiosResponse } from "axios";

interface TrainInfo {
    fromPlace: string;
    toPlace: string;
    departureTime: string;
    availablePlaces: number;
}

const REACT_APP_API_URL = 'http://localhost:5000/';
const $host: AxiosInstance = axios.create({
    baseURL: REACT_APP_API_URL,
});

export const createTrain = async (trainInfo: any): Promise<TrainInfo> => {
    const { data }: AxiosResponse<TrainInfo> = await $host.post('api/train', {
        fromPlace: trainInfo.fromPlace,
        toPlace: trainInfo.toPlace,
        departureTime: trainInfo.departureTime,
        availablePlaces: trainInfo.availablePlaces,
    });
    return data;
};

export const fetchTrains = async (
    fromPlace: string,
    toPlace: string
): Promise<TrainInfo[]> => {
    const { data }: AxiosResponse<TrainInfo[]> = await $host.get('api/train', {
        params: {
            fromPlace,
            toPlace,
        },
    });
    return data;
};
