import PropTypes from 'prop-types';

export const props = {
  className: PropTypes.string,
  picture: PropTypes.string.isRequired,
  price: PropTypes.shape({
    amount: PropTypes.number,
    currency: PropTypes.string,
    decimals: PropTypes.number,
  }).isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export const defaultProps = {
  price: {
    currency: 'ARS',
  },
};
