const initialState = {
    title: 'old title',
    aboutTitle: 'old about title',
    contactTitle: '',
    counter: 0
}

export default function reducer(state = initialState, action) {
    if (action.type === 'CHANGE_TITLE') {
        return {...state, title: 'new title'};
    } else if (action.type === 'CHANGE_ABOUT_TITLE') {
        return {...state, title: 'new about title'};
    } else if (action.type === 'WITH_PARAMS') {
        return {...state, contactsTitle: action.payload};
    } else if (action.type === 'FROM_INPUT') {
        return {...state, contactsTitle: action.payload};
    } else if ( action.type === 'INCREMENT') {
        return {...state, counter: ++state.counter};
    } else if ( action.type === 'DECREMENT') {
        return {...state, counter: state.counter > 0 ? state.counter - 1 : 0};
    } else if (action.type === 'INCREMENT_TO10'){
        return {...state, counter: state.counter + 10};
    } else if (action.type === 'DECREMENT_TO10'){
        return {...state, counter: state.counter - 10 < 0 ? 0 : state.counter - 10, };
    } else if ( action.type === 'RESET'){
        return {...state, counter: 0};
    }

    return state;
}