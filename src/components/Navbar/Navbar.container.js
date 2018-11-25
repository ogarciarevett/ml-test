import { connect } from 'react-redux';
import { goToRoute } from '../../actions';
import Navbar from './Navbar';

const mapDispatchToProps = {
    goToRoute
};

export default connect(null, mapDispatchToProps)(Navbar);