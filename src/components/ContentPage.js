import React, { useState } from "react";

export default function ContentPage (route) {
    return (
        <React.Fragment>
            <div className="PageContent" style={{ display: "flex", flexDirection: "column",width:"95%",height:1150}}>
                <div className="RightTab" style={{ display: "flex", flexDirection: "column",flex:1}}>
                    {route.element}{/*actually page content*/}
                </div>
            </div>
        </React.Fragment>
    );
}