import React, { useState } from "react";

import Item from "./Item";
import Modal from '@mui/material/Modal';

export  default function Inspection(props){
    return (
        <React.Fragment>
            <Modal
                title="CNC"
                style={{ top: 20 }}
                visible={props.visible}
                open={props.onOk}
                onClose={props.onCancel}
                width={1000}
                footer={[

                ]}//set to no footer, can be update in the future
            >
                <div className="Inspection">
                    <Item element={"Inspection"} isshow={true}></Item>
                </div>
            </Modal>
        </React.Fragment>
    );
            }