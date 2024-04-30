import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AppLayout = ({ auth, children }) => {
    return (
        <div>
            <Navbar auth={auth} />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default AppLayout;
