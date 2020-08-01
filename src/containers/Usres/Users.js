import React, {Component} from 'react';
import User from "../../components/Users/Users";
import axios from 'axios'

class Users extends Component {
    state = {
        user: []
    }

    componentDidMount = async () => {
        try {
       const response =  await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
            const user = []
            const resItems = response.data
            for (let i of  resItems){
                user.push(i)
            }
            this.setState({
                user
            })
        } catch (e) {
            console.log(e)
        }


    };

    render() {
        return (
            <User state={this.state}/>
        );
    }
}

export default Users;