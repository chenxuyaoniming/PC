
var renducer=function(state,action){
    if(typeof state === undefined){
        return []
    }
    switch (action.type) {
        case "user":
            return action.text
            break;
    
        default:
            return state;
            break;
    }
}

export default renducer;