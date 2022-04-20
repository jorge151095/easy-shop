import React from 'react';
import { Product } from '../../../models/product.model';
import { CustomCard } from '../../../shared/components';
import './section.scss';

interface ISection {
    title: string;
    subtitle: string;
    products: Product[];
}

const Section: React.FC<ISection> = ({title, subtitle, products}) => {
    return <div className='section'>
        <h2 className='title'>{title}</h2>
        <p className='subtitle'>{subtitle}</p>
        <div className='products-wrapper'>
        {
            products.map((product) => {
                return <div key={product.id} className="product"><CustomCard {...product} /></div>
            })
        }
        </div>
    </div>;
};

export default Section;
