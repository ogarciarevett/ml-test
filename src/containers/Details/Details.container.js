import { connect } from 'react-redux';
import { fetchDetails } from '../../actions';
import Details from './Details';

const mapStateToProps = state => ({
  details: state.details.payload,
  loading: state.details.loading,
  error: state.details.error,
});

const mapDispatchToProps = {
  fetchDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
