import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { transcriptionsReducer } from "./transcriptions/reducer";
import { transcriptionsSaga } from "./transcriptions/saga";
import { ITranscriptionsState } from "./transcriptions/state";

export interface IAppState {
  transcriptionsState: ITranscriptionsState;
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const browserHistory = createBrowserHistory();

export const store = createStore(
  combineReducers<IAppState>({
    transcriptionsState: transcriptionsReducer
  }),
  composeEnhancers(
    applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory))
  )
);

sagaMiddleware.run(function*() {
  yield all([transcriptionsSaga()]);
});
