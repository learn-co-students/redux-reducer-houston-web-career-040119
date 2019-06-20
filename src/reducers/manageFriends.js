export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            let newArr = [...state.friends]
            newArr.push(action.friend)
            return {...state, friends: newArr}
        case 'REMOVE_FRIEND': 
            return {...state, friends: state.friends.filter(friend => friend.id !== action.id)}
        default:
            return state;
    }
}
