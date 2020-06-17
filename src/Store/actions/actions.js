import * as actionTypes from './actionTypes';
import axios from 'axios'


export const weatherData=(weatherData)=>{
    return dispatch=>{
        axios.get(`https://community-open-weather-map.p.rapidapi.com/find?type=link%252C%20accurate&units=imperial%252C%20metric&q=${weatherData}`,{
            headers:{
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "350cb85912mshb5ae152a38a9614p17d31djsnd520247b8a34",
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(res=>{
            dispatch(successData(res.data.list[0].main))
        })
        .catch((err)=>{
            dispatch(failData(err))
        })
    }
}

const successData=(success)=>{
    return{
        type:actionTypes.SUCCESSCONDITION,
        getData:{
            ...success
        }
    }
}

const failData=(fail)=>{
    return{
        type:actionTypes.FAILURECONDITION,
        fail:{
            ...fail
        }
    }
}