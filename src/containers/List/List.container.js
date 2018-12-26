import { connect } from 'react-redux';
import { fetchSearch } from '../../actions';
import { convertQueryToString } from '../../utils/parser';
import List from './List';

const mapStateToProps = state => ({
  items: state.search.payload ? state.search.payload.items : [],
  loading: state.search.loading,
  searchVal: convertQueryToString(state.router.location.search),
  errorSearch: state.search.error ? state.search.error.response : null,
});

const mapDispatchToProps = {
  fetchSearch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
