import { createHistory, createMemoryHistory } from 'history';

let history = createMemoryHistory();

export const getHistory = () => history;
export const setHistory = newHistory => history = newHistory;
