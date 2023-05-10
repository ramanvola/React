import React from "react";
import {Link}  from 'react-router-dom';
import './UserItem.css';
import Avatar from "../../shared/components/UIElement/Avatar";
import Card from "../../shared/components/UIElement/Card";

const UserItem = props =>{
    return <li className="user-item">
        <Card>
            <Link to={`/${props.id}/places`}>
            <div className="user_item__image">
                <Avatar src={props.image} alt={props.name} />
            </div>
            <div className="user_item__info">
                <h2>{props.name}</h2>
                <h3>{props.placeCount} {props.placeCount === 1? 'place': 'places'} </h3>
            </div>
            </Link>
        </Card>
    </li>
};

export default UserItem;