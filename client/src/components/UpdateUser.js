import React from 'react';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { updateMe } from '../actions';
import materialvendorapis from '../apis/materialuivendorapis';

class UpdateUser extends React.Component {
    state = { firstname: '', lastname: '', age: '', email: '' };
    componentDidMount() {
        materialvendorapis.get(`/showme`).then(response => {
           // console.log(response)
            this.setState({
                firstname: response.data.firstname,
                lastname: response.data.lastname,
                age: response.data.age,
                email: response.data.email
            })
        });
    }

    handleUpdate = (event) => { 
        event.preventDefault();
        this.props.updateMe({
            firstname: this.state.firstname,
            lastname:this.state.lastname,
            age:this.state.age,
            email:this.state.email}
            
        )
        this.props.MyProfile()
    }
    render() {
        return (
            <div>
                <FormControl >
                    <p htmlFor="age-native-required">First Name</p>
                    <Input

                        name="firstname"
                        value={this.state.firstname}
                        onChange={(e) => this.setState({ firstname: e.target.value })}
                    />
                    <br /><br />
                    <p htmlFor="age-native-required">Last Name</p>
                    <Input

                        name="lastname"
                        value={this.state.lastname}
                        onChange={(e) => this.setState({ lastname: e.target.value })}
                    />
                    <br /><br />
                    <p htmlFor="age-native-required">Age</p>
                    <Input

                        name="age"
                        value={this.state.age}
                        onChange={(e) => this.setState({ age: e.target.value })}
                    />
                    <br /><br />
                    <p htmlFor="age-native-required">Email</p>
                    <Input

                        name="email"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <br /><br />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleUpdate}

                    >
                      DONE
                    </Button>

                </FormControl>

            </div>
        );
    }

}
export default connect(
    null, {updateMe}
)(UpdateUser);
