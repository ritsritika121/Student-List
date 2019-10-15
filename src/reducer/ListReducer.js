
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LIST':
            return  action.payload
            

        case 'NEW_STUDENT':
        console.log("RED CAZL",action.payload)
            return  state.concat(action.payload)
             
            

        default:
            return state;
    }
};