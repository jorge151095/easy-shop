import React from 'react';
import './link-as-button.scss';

interface ILinkAsButton {
    link: string;
    label: string;
    isNewTab?: boolean;
}

const LinkAsButton: React.FC<ILinkAsButton> = ({ link, label, isNewTab }) => {
    return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
            className="link-as-button"
            href={link}
            target={isNewTab ? '_blank' : '_self'}
        >
            {label}
        </a>
    );
};

export { LinkAsButton };
