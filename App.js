import React from "react";
import ReactDOM from "react-dom/client";

/**
        Header
            - Logo
            - List Items(Right Side)
            - Cart
        Body
            - Search Bar
            - Restaurant List
              - Restaurant Card
                -Image
                -Name
                -Rating
                -Cuisins
        Footer
         - Links
         - Copyrights
        
        */

// const heading = React.createElement(
//     "h1",
//     {
//         id:"title",
//         key:"h1"
//     },
//     "Namaste React"
// );

// const heading2 = React.createElement(
//     "h2",
//     {
//         id:"title",
//         key:"h2"
//     },
//     "heading 2"
// );

// const container = React.createElement(
//     "div",
//     {
//         id:"container"
//     },
//     [heading, heading2]
// );

// console.log(heading);

//functional component
// const Title = () =>(
//     <h1 id="title" key="h3">
//         Namaste React
//     </h1>
// );
/*
//functional component is nothing but a normal function in js.
//here we are taking an example of arrow function.
const HeaderComponent = () => {
    return <h1>React Functional Component</h1>;
}

//writing multiple declarations but in single line
const HeaderComponent2 = () => {
    return <div><h1>React Functional Component</h1><h2>enjoy coding</h2></div>;
}

//writing multiple declarations but in separate line
const HeaderComponent4 = () => {
    return (
        <div>
            {Title()}
            <h1>React Functional Component</h1>
            <h2>enjoy coding</h2>
        </div>
    );
}
*/
//normal function example
const Title = () => (
    <a href="\">
    <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq_LmiEG7PEV3p9MGjSYDxsn1BzvEy5fEdg&usqp=CAU"
    />
    </a>
);

//connection componenets
const Header = function() {
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    );
}

//Config Driven UI

// const config=[
//     {
//         type:"carousel",
//         cards:[
//             {
//                 offerName: "50% off"
//             },
//             {
//                 offerName: "No Delivery Charge"
//             }
//         ]
//     },
//     {
//         type: "restaurants",
//         cards:[
//             {
//                 name: "Anand Bakery",
//                 image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/edjpjqq9fsqdhmnnts6p",
//                 cuisines: ["Desserts, South Indian"],
//                 rating: "4.2",
//             },
//             {
//                 name: "KFC",
//                 image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/edjpjqq9fsqdhmnnts6p",
//                 cuisines: ["Desserts, South Indian"],
//                 rating: "4.2",
//             }
//         ]
//     }
// ]

const burgerKing = 
    {
        name: "Anand Bakery",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/edjpjqq9fsqdhmnnts6p",
        cuisines: ["Desserts, South Indian"],
        rating: "4.2",
    }

const RestaurantCard = () => {
    return (
        <div className="card">
            <img src= {burgerKing.image} />
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cuisines.join(", ")}</h3>
            <h4>{burgerKing.rating} stars</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className="restaurant-list"> 
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    );
};

const Footer = () => {
    return(
        <h4>Footer</h4>
    );
};

const AppLayout = () => {
    return (
        <React.Fragment>
           <Header/> 
           <Body/>
           <Footer/>
        </React.Fragment>
    );
};

//creating obj to provide styles in react
// const styleObj={
//     backgroundColor:"gray",
// };

//React.Fragment
//jsx-one parent
// const Jsx = () => {
//     return (
//         <div style={styleObj}>
//           <h1>JSX</h1>
//           <h2>Second JSX</h2>  
//         </div>
//     );
// };



const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering react component
//root.render(container);

//rendering functional component
root.render(<AppLayout/>);
