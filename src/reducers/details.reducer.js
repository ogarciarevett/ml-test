const initialState = {
  error: null,
  loading: false,
  payload: {},
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DETAILS_SUCCESS': {
      return {
        ...state,
        loading: false,
        payload: action.payload,
        error: null,
      };
    }

    case 'FETCH_DETAILS_PENDING': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'FETCH_DETAILS_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
};

export default detailsReducer;
