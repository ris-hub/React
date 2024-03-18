import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(0);
    //console.log("render fuction");
    useEffect(() => {
        //API call
        //console.log("useEffect")
    }, [])
    //console.log("render");
    return (
        <div>
            <h1>This is Profile</h1>
            <h3>Name: {props.name}</h3>
            <h3>Count: {count}</h3>
            <button
                onClick={() => {
                    setCount(1);
                }}
            >
                Click</button>
        </div>
    )
}

export default Profile;