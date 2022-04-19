import React from 'react';
import './link-as-button.scss';

interface ILinkAsButton {
    link: string;
    label: string;
};

const LinkAsButton: React.FC<ILinkAsButton> = ({link, label}) => {
    return <a className='link-as-button' href={link}>{label}</a>
};

export { LinkAsButton };
