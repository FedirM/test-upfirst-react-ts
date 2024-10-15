import './main.css';

import { useEffect } from 'react';
import { requestAllProducts } from '../../state/productActions';
import { useAppDispatch, useAppSelector } from '../../interfaces/share';
import CardComponent from '../card';


function CardList() {
    
    const useDispatch = useAppDispatch();
    const products = useAppSelector(state => state.product.products);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useDispatch(requestAllProducts());
    }, [useDispatch]);

    return (
        <div className="card-list-wrapper">
            {
                products && products.map((p, i) => 
                    <div key={i} className="card-list-item">
                        <CardComponent data={p} />
                    </div>
                )
            }
        </div>
    )
}

export default CardList;