import React from 'react';
import { Product } from '../../../models';
import { Rating } from '@mui/material';
import './info.scss';
import { LinkAsButton } from '../../../shared/components/link-as-button';

interface IInfo {
    product?: Product;
}

const Info: React.FC<IInfo> = ({ product }) => {
    return product ? (
        <div className="info">
            <div className="image-wrapper">
                <span className="container">
                    <img alt="product" src={product.imageUrl} />
                </span>
            </div>
            <div className="data">
                <h1 className="name">{product.name}</h1>
                <div className="rating">
                    <Rating
                        name="half-rating-read"
                        defaultValue={product.rating}
                        precision={0.1}
                        size="small"
                        readOnly
                    />
                    <span className="label">({product.rating})</span>
                </div>

                <div className="price-wrapper">
                    {product.priceDiscount && (
                        <div className="price">
                            $ {product.priceDiscount?.toFixed(2)}
                        </div>
                    )}
                    <div
                        className={`${
                            product.priceDiscount ? 'price-discount' : 'price'
                        }`}
                    >
                        $ {product.price.toFixed(2)}
                    </div>
                </div>
                <div className="seller">
                    Producto vendido en página externa.*
                </div>
                <LinkAsButton
                    link={product.link}
                    label="Ir a comprar"
                    isNewTab={true}
                />
            </div>
            <div className="description-wrapper">
                <h2 className="title">Descripción</h2>
                <p className="content">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: product.description,
                        }}
                    />
                </p>
                <p className='disclaimer'>* Como Afiliados de terceros, Easyshop percibe comisiones con las compras elegibles.</p>
            </div>
        </div>
    ) : (
        <div>Página no encontrada</div>
    );
};

export default Info;
