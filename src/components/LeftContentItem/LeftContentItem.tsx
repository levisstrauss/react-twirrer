import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface LeftContentItemProps {
    icon: IconProp;
    text: string;
}

const LeftContentItem = ({ icon, text }: LeftContentItemProps) => {
    return (
        <div>
            <FontAwesomeIcon icon={icon} />
            <h3 className="left-content-heading">{text}</h3>
        </div>
    );
};

export default LeftContentItem;
