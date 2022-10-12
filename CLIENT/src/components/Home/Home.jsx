import React from "react";
import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";
import Card from "../Card/Card";

export default function Home() {

    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return(
        <div className="home">
            <h1>Home</h1>
            <div className="productos">
                {allProducts?.map(p =>
                    <Card
                    key = {p.id}
                    id = {p.id}
                    img = {p.img}
                    title = {p.title}
                    price = {p.price}
                    />
                    )}
            </div>
        </div>
    )

}