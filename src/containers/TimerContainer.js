import { connect } from 'react-redux'
import { setTime } from '../actions'
import Timer from '../components/Timer'

const mapStateToProps = state => {
    return {
        difficulty: state.difficulty,
        guessed: state.gameProgress.guessed,
        time: state.time,
    };
};

const mapDispatchToProps = dispatch => ({
    setTime: (time) => dispatch(setTime(time)),
});

const TimerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer);

export default TimerContainer;