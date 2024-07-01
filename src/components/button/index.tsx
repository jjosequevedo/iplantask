'use client';

import { ButtonProps } from "@/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Button: React.FC<ButtonProps> = ({ icon, onClick, classes, title, modalId, iconClass, children }) => {

    return (
        <>
            <button onClick={() => onClick?.call(this)}
                type="button"
                data-modal-target={modalId}
                data-modal-toggle={modalId}
                className={classes}>
                {icon && <FontAwesomeIcon className={iconClass} icon={icon} />}
                {title && <span>{title}</span>}
            </button>
            {children}
        </>
    );
}
