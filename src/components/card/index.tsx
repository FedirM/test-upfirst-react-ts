import './main.css';
import React, { useState, useRef, useLayoutEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Product } from "../../interfaces/product";
import { FaAngleRight, FaStar } from "react-icons/fa";
import { useWindowSize } from '../../hooks/useWindowResize';
import { FaCartPlus } from "react-icons/fa";

interface Props {
    data: Product,
    initialState?: boolean,
    onChange?: (isOpen: boolean) => void,
}

function CardComponent(props: Props) {

    const [isOpen, setOpen] = useState(props.initialState ?? false);
    const cardContentRef = useRef(null);
    const windowSize = useWindowSize();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        // Just to rerender component on window resize.
        console.debug('Window size: ', windowSize);
    }, [windowSize])

    function switchState() {
        setOpen((old) => !old);
        props.onChange?.call(undefined, isOpen);
    }

    function getMaxHeight(): string {
        if(cardContentRef && isOpen) {
            return '400px';
        } else {
            return '0px';
        }
    }

    function stopPropagation(e: React.MouseEvent<HTMLElement>) {
        e.stopPropagation();
    }

    return (
        <div className="card-wrapper" onClick={switchState}>
            <div className="card-header">
                <div className={`card-chevron ${isOpen ? 'rotate' : '' }`}>
                    <FaAngleRight />
                </div>
                <div className="card-title">
                    {props.data.title}
                </div>
                <div className="card-rating">
                    <div className="rate">
                        <span className="rate-number">
                            {props.data.rating.rate.toFixed(1)}
                        </span>
                        <FaStar className="rate-icon" />
                    </div>
                    <div className="count" >
                        {props.data.rating.count} votes
                    </div>
                </div>
            </div>
            <div
                className="card-content"
                ref={cardContentRef}
                style={{ maxHeight: getMaxHeight() }}
            >
                <div className="cc-image">
                    <img src={props.data.image.toString()} alt='product item' onClick={stopPropagation}/>
                </div>
                <div className="cc-info">
                    <div className="cc-price">
                        <span onClick={stopPropagation}>Price: {props.data.price.toFixed(2)}&#36;</span>
                    </div>
                    <div className="cc-description" onClick={stopPropagation}>
                        {props.data.description}
                    </div>
                    <div className="cc-action">
                        <button className="cc-action-btn" onClick={(e) => {navigate('/contacts'); stopPropagation(e)}}>
                            <FaCartPlus className="cc-action-btn-icon" />
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;