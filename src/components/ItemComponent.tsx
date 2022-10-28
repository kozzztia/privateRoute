import React from 'react';
import {Link, useParams} from "react-router-dom";

const ItemComponent = () => {
    const {id} = useParams()
    return (
        <div>
            text = {id}
            <br/>
            <Link to={"/main"}>back</Link>
        </div>
    );
};

export default ItemComponent;
