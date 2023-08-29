"use strict";



// const [data, setData] = useState(null);
  // const [requestParams, setRequestParams] = useState({});
  // const [loading, setLoading] = useState(false);


export const initialState = {  
    data: null,
    requastParams: {},
    loading: false,
    history:[],
    renderH:false

}

export function reducer(state,action) {
    switch(action.type) {
        case "CHANGEDATA":{
            return {...state,data : action.payload}
        }
        case "CHANGEPARAM":{
            return {...state,requastParams : action.payload}
        }
        case "LOADING":{
            return {...state,loading : action.payload}
        }
        case "HISTORY":{
            return {...state,history :[...state.history,action.payload] }
        }
        case "RENDERHIS":{
            return {...state,renderH :action.payload }
        }
        default : return state

    }

 
}

