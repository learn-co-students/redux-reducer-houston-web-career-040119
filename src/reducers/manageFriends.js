export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            let newFriends = [...state.friends, action.friend]
            return {friends: newFriends}
        case 'REMOVE_FRIEND': 
            return{friends: state.friends.filter(friend => friend.id !== action.id)}
        default: 
            return state
    }
}
