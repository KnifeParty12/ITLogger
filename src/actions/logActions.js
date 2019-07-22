import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SEARCH_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT
} from './types';

// Get logs from Server

export const getLogs = () => async (dispatch) => {
    try{
    setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
};

// Add a new Log
export const addLog = (log) => async (dispatch) => {
    try{
        setLoading();

        const res = await fetch('/logs',{
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
};

// Search logs
export const searchLogs = (text) => async dispatch => {
    try{
        setLoading();

        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
};



//Delete Logs

export const deleteLog = (id) => async (dispatch) => {
    try{
        setLoading();

        await fetch(`/logs/${id}`,{
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
};

// Set Current Log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
};

//Clear Current log

export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
};

// Update Log
export const updateLog = log => async dispatch => {
    try{
        setLoading();

        const res = await fetch(`/logs/${log.id}`,{
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
};



//SET LOADING to true
export const setLoading = () => {
    return{
        type: SET_LOADING
    };
};
