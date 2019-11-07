import React from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";

const MainComponent = props => {
   return (
      <div>
         <Header />
         <Home membership={props.membership} />
      </div>
   );
};

export default MainComponent;
