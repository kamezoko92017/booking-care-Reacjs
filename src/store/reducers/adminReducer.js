import actionTypes from '../actions/actionTypes';

const initContentOfConfirmModal = {
    isOpen: false,
    messageId: "",
    handleFunc: null,
    dataFunc: null
}

const initialState = {
    genders: [],
    roles: [],
    positions: [],
    isLoadingGender: false
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state }
            copyState.isLoadingGender = true
            console.log('fire fetch gender start: ', action)
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data
            state.isLoadingGender = false
            console.log('fire fetch gender success: ', action)
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            state.genders = []
            state.isLoadingGender = false
            console.log('fire fetch gender failed: ', action)
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data
            console.log('fire fetch positions success: ', action)
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = []
            console.log('fire fetch positions failed: ', action)
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data
            console.log('fire fetch roles success: ', action)
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = []
            console.log('fire fetch roles failed: ', action)
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;