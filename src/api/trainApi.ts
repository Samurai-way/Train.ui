import axios, {AxiosInstance} from "axios";

type TrainInfo = {
    fromPlace: string;
    toPlace: string;
    departureTime: string;
}

const url = 'https://trainapi-production.up.railway.app/train';
const $host: AxiosInstance = axios.create({
    baseURL: url,
});

export const createTrainTrip = async (trainInfo: TrainInfo) => {
    try {
        const {status} = await $host.post('/create', {
            fromPlace: trainInfo.fromPlace,
            toPlace: trainInfo.toPlace,
            departureTime: trainInfo.departureTime,
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        return status === 204;
    } catch (error) {
        console.error(error);
    }
};
