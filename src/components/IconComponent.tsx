import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faGear} from "@fortawesome/free-solid-svg-icons"

export const IconMenuBar = () => {
    return <FontAwesomeIcon icon={faBars} style={{ color: 'black', minWidth: 14, minHeight: 14 }} />;
};
export const IconSetting = () => {
    return <FontAwesomeIcon icon={faGear} style={{ color: 'black', minWidth: 14, minHeight: 14 }} />;
};