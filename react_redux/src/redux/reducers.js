export function reducer(state = 0, action){
    switch(action.type){
        case 'increment':
            return state + action.data;
        case 'decrement':
            return state - action.data;
        default:
            return state;
    }
}