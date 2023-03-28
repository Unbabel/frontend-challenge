import axios, {AxiosInstance} from "axios";
import type {InternalAxiosRequestConfig, AxiosResponse} from "axios";
import {ApiEngineEventTypeConstants} from "./constants/api-engine-event-type.constants";
import Eventbus from "../eventbus";

export function ApiEngine(baseURL: string) : AxiosInstance {

    const engine = axios.create({
        baseURL: baseURL,
        timeout: ( 60 * 1000 ),
        timeoutErrorMessage: 'Timeout error. Please verify service availability and network connection.',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    engine.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        Eventbus.emit(ApiEngineEventTypeConstants.SERVICE_REQUEST_STARTED);
        return config;

    },handleRejectError);

    engine.interceptors.response.use((response: AxiosResponse) => {
        Eventbus.emit(ApiEngineEventTypeConstants.SERVICE_REQUEST_ENDED);
        return response;
    },handleRejectError);

    function handleRejectError(error: object): object {
        Eventbus.emit(ApiEngineEventTypeConstants.SERVICE_REQUEST_ENDED);
        return Promise.reject(error);
    }

    return engine;
}
