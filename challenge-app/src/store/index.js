import {createStore} from "vuex";
import transcription from "./transcription";

export const store = createStore({
    modules: {
        transcription,
    }
});
