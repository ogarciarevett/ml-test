import { connect } from 'react-redux';
import { putId, fetchSearch } from '../../actions';
import List from './List';

const mapStateToProps = state => ({
    items: state.app.payload ? state.app.payload.items : [],
    loading: state.app.loading
});

const mapDispatchToProps = {
    putId,
    fetchSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
