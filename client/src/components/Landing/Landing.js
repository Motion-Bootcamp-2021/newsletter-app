import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LandingHeader from './LandingHeader';
import LandingFeatures from './LandingFeatures';
import './Landing.scss'

const Landing = ({ user }) => {
    let history = useHistory();

    if(user) {
        history.push('main');
    }

    return (
        <div className="landing-wrapper">
            <div className="landing">
                <LandingHeader />
                <LandingFeatures />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    user: state.user.user,
});

export default connect(mapStateToProps, null)(Landing);
