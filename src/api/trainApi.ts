import axios, { AxiosInstance, AxiosResponse } from "axios";

type TrainInfo ={
    fromPlace: string;
    toPlace: string;
    departureTime: string;
}

const url = 'http://localhost:3000/train';
const $host: AxiosInstance = axios.create({
    baseURL: url,
});

export const createTrainTrip = async (trainInfo: TrainInfo) => {
    try {
        const { status } = await $host.post('/create', {
            fromPlace: trainInfo.fromPlace,
            toPlace: trainInfo.toPlace,
            departureTime: trainInfo.departureTime,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return status === 204;
    } catch (error) {
        console.error(error);
    }
};



export const findTrains = async (
    fromPlace: string,
    toPlace: string
): Promise<TrainInfo[]> => {
    const { data }: AxiosResponse<TrainInfo[]> = await $host.get('', {
        params: {
            fromPlace,
            toPlace,
        },
    });
    console.log('data', data)
    return data;
};
