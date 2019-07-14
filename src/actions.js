import { getCurrencyCodeApi,submitQuoteApi } from './api';

export const constant = {
    GET_RESULT : 'GET_RESULT',
    SHOW_ERROR: 'SHOW_ERROR',
    SHOW_RESULT : 'SHOW_RESULT',
    QUOTE : 'quote',
    RESULT : 'result',
    RESET_STATE : 'RESET_STATE'
}

const loadFetching = () => {
    return {
        type: constant.GET_RESULT,
    }
}

const loadResult = payload => {
    return {
        type: constant.SHOW_RESULT,
        payload
    }
}

const loadError = (error) => {
    return {
        type: constant.SHOW_ERROR,
        error
    }
}

export const resetStateAction = () => {
    return {
        type: constant.RESET_STATE,
    }
}

export const submitQuoteAction = payload => {
    loadFetching();
    return dispatch=>{
        submitQuoteApi(payload)
        .then(result=>{
            dispatch(loadResult({resultQuote:result, status:constant.RESULT}));
        })
        .catch(error=> dispatch(loadError(error)));     
    }
}

export const getCurrencyCode = () =>{
    loadFetching();
    return dispatch=>{
        getCurrencyCodeApi()
        .then(result=>{
            dispatch(loadResult({currencies:result}));
        })
        .catch(error=> dispatch(loadError(error)));        
    }
}