export function manageFriends(state={friends:[]}, action){
    switch(action.type){
        case'ADD_FRIEND':{
            return {friends:[...state.friends,action.friend]}
        }
        case'REMOVE_FRIEND':{
            let newArr = state.friends.filter(x=>x.id!=action.id)
            return {friends:newArr}
        }
        default: return state
    }
}
