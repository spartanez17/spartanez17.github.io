import { connect } from 'react-redux';
import { setProfileInfo, setDifficulty, setSkirt } from '../actions'
import Form from '../components/Form';


const mapStateToProps = state => {
    return {
        firstName: state.profile.firstName,
        lastName: state.profile.lastName,
        email: state.profile.email,
        difficulty: state.difficulty,
        skirt: state.skirt,
    }
}

const mapDispatchToProps = dispatch => ({
    profileListener: profile => dispatch(setProfileInfo(profile)),
    difficultyListener: difficulty => dispatch(setDifficulty(difficulty)),
    skirtListener: skirt => dispatch(setSkirt(skirt)),
})

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default FormContainer;