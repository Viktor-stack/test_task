import React, {Component} from 'react'
import axios from "axios"
import moment from 'moment'
import Calendar from "../../components/Calendar/Calendar";


class СalendarContainer extends Component {
    state = {
        user: [],
        month: {},
        2019: []
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
            const user = []
            const resItems = response.data
            for (let i of resItems) {
                user.push(i)
            }
            this.setState({
                user
            })

            const month = this.state.month
            await this.state.user.forEach((user, i, arr) => {
                const obj = {}
                const date = moment(user.dob).format('M')
                if (obj) {
                    if (!month[date]) {
                        month[date] = []
                    }
                    month[date].push(user)
                    return month
                }


            })
            this.setState({
                month
            })
            const myObject = this.state.month;
            this.state["2019"] = []
            Object.keys(myObject).forEach(key => {
                this.state["2019"].push(myObject[key])
            })
            this.setState({
                "2019": this.state["2019"]
            })

        } catch (e) {
            console.log(e)
        }
    };


    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', margin: '0'}}>Календарь</h1>
                <Calendar state={this.state}/>
            </div>
        );
    }
}

export default СalendarContainer;