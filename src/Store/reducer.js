import * as actionTypes from './actions/actionTypes'

const initialstate={
    weatherdata:{},
}

 const reducer=(state=initialstate,action)=>{
    if(action.type===actionTypes.SUCCESSCONDITION){
        return{
            weatherdata:action.getData
        }
    }
    return state
}

export default reducer