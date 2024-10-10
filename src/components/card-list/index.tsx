import { useEffect } from 'react';
import { requestAllProducts } from '../../state/productActions';
import { useAppDispatch, useAppSelector } from '../../interfaces/share';


function CardList() {
    
    const useDispatch = useAppDispatch();
    const products = useAppSelector(state => state.product.products);

    useEffect(() => {
        console.log('Products: ', products);
    })

    function BtnClick(e: any) {
        console.log('click: ', e);
        useDispatch(requestAllProducts());
    }

    return (
        <div onClick={BtnClick}>Hello, there@!</div>
    )
}

export default CardList;