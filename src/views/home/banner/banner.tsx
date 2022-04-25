import { Card } from '@mui/material';
import React from 'react';
import './banner.scss';
import promotion from './../../../assets/images/promocion.png';

const Banner: React.FC = () => {
    return (
        <div className="banner">
            <Card variant="outlined" className="banner-wrapper">
                <div className="banner-content">
                    <h1 className="banner-header">EasyShop</h1>
                    <h6 className="banner-text">
                        La plataforma mexicana donde encontrarás las mejores
                        ofertas del mercado electrónico de México. Los mejores
                        descuentos y cupones solo aquí.
                    </h6>
                    <h5 className="banner-footer">
                        !Tú lo sueñas y nosotros lo buscamos!
                    </h5>
                </div>
                <div className="banner-image-wrapper">
                    <img src={promotion} alt="promo" className="banner-image" />
                </div>
            </Card>
        </div>
    );
};

export default Banner;
