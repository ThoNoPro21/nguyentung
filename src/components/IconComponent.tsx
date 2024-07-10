import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faCheck, faGear, faPhone} from "@fortawesome/free-solid-svg-icons"

export const IconMenuBar = () => {
    return <FontAwesomeIcon icon={faBars} style={{ color: 'black', minWidth: 14, minHeight: 14 }} />;
};
export const IconSetting = () => {
    return <FontAwesomeIcon icon={faGear} style={{ color: 'black', minWidth: 14, minHeight: 14 }} />;
};
export const IconSucces = () => {
    return <FontAwesomeIcon icon={faCheck} style={{ color: 'blue', minWidth: 14, minHeight: 14 }} />;
};
export const IconError = () => {
    return <FontAwesomeIcon icon={faCheck} style={{ color: 'red', minWidth: 14, minHeight: 14 }} />;
};
export const IconPhone = () => {
    return <FontAwesomeIcon icon={faPhone} style={{ color: 'white', minWidth: 14, minHeight: 14 }} />;
};