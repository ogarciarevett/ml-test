export const fetchSearch = value => ({
  type: "FETCH_SEARCH",
  value
});

export const goToRoute = route => ({
  type: "GO_TO_ROUTE",
  route
});

export const fetchDetails = id => ({
  type: "FETCH_DETAILS",
  id
});
