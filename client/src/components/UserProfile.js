import React from 'react';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import materialvendorapis from '../apis/materialuivendorapis';
class UserProfile extends React.Component {
    state = { firstname: '', lastname: '', age: '', email: '' };
    componentDidMount() {
        materialvendorapis.get(`/showme`).then(response => {
            console.log(response)
            this.setState({
                firstname: response.data.firstname,
                lastname: response.data.lastname,
                age: response.data.age,
                email: response.data.email
            })
        });
    }
    render() {
        return (
            <div>

                <FormControl>
                    <p htmlFor="age-native-required">First Name</p>
                    <Input
                       disabled
                        name="firstname"
                        value={this.state.firstname}

                    />
                    <br /><br />
                    <p htmlFor="age-native-required">Last Name</p>
                    <Input
                        disabled
                        name="lastname"
                        value={this.state.lastname}

                    />
                    <br /><br />
                    <p htmlFor="age-native-required">Age</p>
                    <Input
                        disabled
                        name="age"
                        value={this.state.age}

                    />
                    <br /><br />
                    <p htmlFor="age-native-required">Email</p>
                    <Input
                        disabled
                        name="email"
                        value={this.state.email}

                    />
                    <br /><br />
                   

                </FormControl>

            </div>
        );
    }

}
export default connect(
    null, null
)(UserProfile);


