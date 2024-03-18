import React from "react";
import Profile from "../components/ProfileClass";

// const About = () => {
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <p>
//                 {" "}
//                 This is the Namaste React Live Course Chapter 07 - Finding the Path
//             </p>
//             <ProfileFunctionalComponent name={"Rishabh"} />
//             <Profile name={"Rishabh Prasad"} xyz={"abc"} />
//         </div>
//     )
// }

//Changin about us component to class based component
class About extends React.Component {
    constructor(props) {
        super(props);

        //console.log("Parent- Constructor");
    }

    async componentDidMount() {
        //best place to make an API call


        //console.log("Parent - componentDidMount")
    }

    render() {
        //console.log("Parent - render");
        return (
            <div>
                <h1>About Us Page</h1>
                <p>
                    {" "}
                    This is the Namaste React Live Course Chapter 07 - Finding the Path
                </p>
                {/* <ProfileFunctionalComponent name={"Rishabh"} />
                <Profile name={"Rishabh Prasad"} xyz={"abc"} */}
                <Profile name={"First Child"} xyz={"abc"} />
                {/* <Profile name={"Second Child"} xyz={"abc"} /> */}

            </div>
        )
    }
}

export default About;