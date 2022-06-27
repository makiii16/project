import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";


type Props = {
    children: JSX.Element,
};

const Wrapper = ({children}: Props) => {
    return (
        <>

            <Nav />
            <main >
                {children}
            </main>
            <Footer />

        </>
    )
}

export default Wrapper;
