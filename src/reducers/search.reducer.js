const initialState = {
  error: null,
  loading: false,
  payload: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCH_SUCCESS': {
      return {
        ...state,
        loading: false,
        payload: action.payload,
        error: null,
      };
    }

    case 'FETCH_SEARCH_PENDING': {
      return {
        ...state,
        loading: true,
      };
    }

    case 'FETCH_SEARCH_ERROR': {
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

export default searchReducer;
