const initialState = {
    userName: ''
};

export default function counter(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'GET_USER':
            newState.userName = action.payload.userName;
            break;
        default:
            break;
    }
    return {...newState}
}