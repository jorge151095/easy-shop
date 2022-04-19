import React from 'react';
import { productsMock } from '../../mocks/data/products';
import Section from './section';
import './home.scss';

const Home: React.FC = () => {
    return <div className='home'>
        <Section title='Productos en tendencia' subtitle='Mejor colección del 2022'products={productsMock}/>
    </div>
};

export default Home;
