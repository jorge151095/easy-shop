import React from 'react';
import { Product } from '../../../models';
import { Rating } from '@mui/material';
import './info.scss';
import { LinkAsButton } from '../../../shared/components/link-as-button';

interface IInfo {
    product?: Product;
};

const Info: React.FC<IInfo> = ({product}) => {
    return product ? <div className='info'>
        <div className='image-wrapper'>
            <span className='container'>
                <img alt="product" src={product.imageUrl} />
            </span>
        </div>
        <div className='data'>
            <h1 className='name'>{product.name}</h1>
            <div className='rating'>
                <Rating name="half-rating-read" defaultValue={product.rating} precision={0.1} size="small" readOnly />
                <span className='label'>({product.rating})</span>
            </div>
            
            <div className='price-wrapper'>
                <div className='price'>$ {product.price.toFixed(2)}</div>
                <div className='price-discount'>{product.priceDiscount}</div>
            </div>
            <div className='seller'>Producto vendido por Amazon México</div>
            <LinkAsButton link={product.link} label="Ir a Amazon" />
        </div>
        <div className='description-wrapper'>
            <h2 className='title'>Descripción</h2>
            <p className='content'><div dangerouslySetInnerHTML={{ __html: product.description }} /></p>
        </div>
    </div> :
    <div>Página no encontrada</div>
};

export default Info;
