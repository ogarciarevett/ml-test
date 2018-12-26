import PropTypes from 'prop-types';

export const props = {
  details: PropTypes.object,
  fetchDetails: PropTypes.func,
  loading: PropTypes.bool,
  location: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
};

export const defaultProps = {
  details: {
    picture: '',
  },
};
