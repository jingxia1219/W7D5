import { connect } from 'react-redux';
import { logIn } from '../../actions/session';
import LogIn from './login';

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(logIn(formUser))
});

export default connect(null, mapDispatchToProps)(LogIn);
