import * as React from 'react';
import Card from '@mui/material/Card';
import { Rating } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Product } from '../../../models/product.model';
import { LinkAsButton } from '../link-as-button';
import './card.scss';

const CustomCard: React.FC<Product> = (props: Product) => {
    return (
        <Card className="card">
            <CardMedia
                component="img"
                height="194"
                image={props.imageUrl}
                alt={props.name}
                sx={{ objectFit: 'contain' }}
            />
            <CardContent>
                <h3 className="name">{props.name}</h3>
                <div className="rating">
                    <Rating
                        name="half-rating-read"
                        defaultValue={props.rating}
                        precision={0.1}
                        size="small"
                        readOnly
                    />
                    <span className="label">({props.rating})</span>
                </div>

                <div className="price-wrapper">
                    {props.priceDiscount && (
                        <div className="price">
                            $ {props.priceDiscount?.toFixed(2)}
                        </div>
                    )}
                    <div
                        className={`${
                            props.priceDiscount ? 'price-discount' : 'price'
                        }`}
                    >
                        $ {props.price.toFixed(2)}
                    </div>
                </div>
            </CardContent>
            <CardActions disableSpacing>
                <div className="link-wrapper">
                    <LinkAsButton
                        link={`product?id=${props.id}`}
                        label="Ver Producto"
                    />
                </div>
            </CardActions>
        </Card>
    );
};

export { CustomCard };
