import React from 'react';
import UserList from '../components/UserList';
import myImage from './OIP.png';

const Users =() => {
const USERS =[
    {
        id :'U1',
        image: myImage,
        name :'Raman',
        places: 3,
        
    }
    // {
    //     id :'U2',
    //     name :'Anuja',
    //     places: 2,
    //     image: null
    // }
    
];

    return <UserList items={USERS}/>
    
};

export default Users;