import React from 'react';
import { Link } from "react-router-dom"

const Card = ({ img, title, price, id }) => {
    return (
        <div>
            <Link to={`/Home/Product/${id}`}>
                <img src={img} alt="foto" />
            </Link>
            <h3>{title}</h3>
            <h3>{price}</h3>
        </div>
    );
};

export default Card;