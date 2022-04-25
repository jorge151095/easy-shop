import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { Product } from '../../models';
import Info from './info';
import { productsMock } from './../../mocks/data/products';
import './product.scss';

const Home: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        getData();
    }, [searchParams]);

    const getData = () => {
        const id = searchParams.get('id');
        setProduct(productsMock.find((product) => product.id === id));
    };

    return (
        <div className="product-wrapper">
            <Button
                sx={{
                    backgroundColor: '#d23f57',
                    color: '#fff',
                    border: 'none',
                    '&:hover': {
                        backgroundColor: '#d23f57',
                        border: 'none',
                    },
                }}
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                href="/"
            >
                Regresar
            </Button>
            <Info product={product} />
        </div>
    );
};

export default Home;
