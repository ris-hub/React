import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        //whenver class gets loaded constructor gets called
        //best place to create state
        // this.state = {
        //     count: 0,
        //     count2: 0,
        // };
        this.state = {
            userInfo: {
                name: "Dummy Name",
                json: "Dummy bio",
            }
        }
        console.log("Child -Constructor" + this.props.name)
    }

    async componentDidMount() {


        const data = await fetch(("https://api.github.com/users/ris-hub"))
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json,
        })
        console.log("Child - componentDidMount" + this.props.name);
    }

    componentDidUpdate() {
        console.log("Child - componentDidUpdate" + this.props.name);
    }

    componentWillUnmount() {
        console.log("Child - componentWillUnmount" + this.props.name);
    }

    render() {
        const { count, count2 } = this.state;
        console.log("Child - render" + this.props.name)
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name: {this.state.userInfo.name}</h2>
                <img src={this.state.userInfo.avatar_url} />
                <h2>Bio: {this.state.userInfo.bio}</h2>
                {/* <h2>Count: {count}</h2>
                <button onClick={() => {
                    this.setState({
                        count: 1,
                        count2: 2,
                    })
                }}>
                    SetCount</button>
                <h2>Count: {count2}</h2> */}
            </div>
        )
    }
}

export default Profile;