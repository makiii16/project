import React from "react";
import Welcome from "../components/Welcome";
import Cards from "../components/Cards";

const Home = () => {

    return (

        <>
            <Welcome />
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <Cards />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
