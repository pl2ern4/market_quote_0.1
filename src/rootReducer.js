import {constant} from './actions';
import * as jsonPhone from './mockPhoneCode.json';
import { combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';

const initialState = {
                        phoneList: jsonPhone.code,
                        resultQuote:{}, 
                        status:constant.QUOTE, 
                        // quoteForm : formReducer
};

export const appReducer = (state=initialState, action) => {
    switch(action.type){
        case constant.GET_RESULT:
            return { ...state,
                isFetching:true,
                isError:false
            };
        
        case constant.SHOW_ERROR:
            return { ...state,
                isFetching:false,
                isError:true
            };

        case constant.SHOW_RESULT:
            return { ...state,
                isFetching:false,
                isError:false,
                ...action.payload||{}  
            };    
        
        case constant.RESET_STATE:
            return {
                ...state,
                isFetching:false,
                isError:false,
                status: constant.QUOTE,
                resultQuote:{}
            };
        default:
            return {...state};
        
    }
}

const initialUser = { FirstName: '' };

export const rootReducer = combineReducers({
                            store:appReducer,
                            form:combineForms({
                                user: initialUser,
                            })
                        });
