import React from "react";
import ContentPage from "./ContentPage"
import "./Layout.css";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout(route){
    return(
        <React.Fragment>
            <Header/>
            <ContentPage {...route}>
                    </ContentPage>
            <Footer/>
        </React.Fragment>
    );

}