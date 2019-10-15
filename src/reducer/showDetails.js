
export default (state = [], action) => {
    switch (action.type) {
        case 'SHOW_DETAILS':
            return  action.payload

        default:
            return state;
    }
};