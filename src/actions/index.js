export const fetchSearch = value => ({
    type: 'FETCH_SEARCH',
    value
});

export const goToRoute = route => ({
    type: 'GO_TO_ROUTE',
    route
});

export const putQuery = query => ({
    type: 'PUT_QUERY',
    query
});

export const putId = id => ({
    type: 'PUT_ID',
    id
});