import React, { useState, useEffect } from "react";
import { url } from "inspector";

interface User {
    id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
}

interface UserProfileProps {
    user: User;
}

interface UserProfileState {
    users: User[];
}

function UserProfile(props: UserProfileProps) {

    const { first_name, last_name, avatar, email } = props.user;

    return (
        <div className="card" style={{ width: "12rem" }}>
            <img className="card-img-top" src={avatar} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{`${first_name} ${last_name}`}</h5>
                <p className="card-text">{email}</p>
            </div>
        </div>
    );
}

function ReqresUsers() {
    const url = "https://reqres.in/api/users";

    const initialstate: User[] = [];
    const [data, setdata] = useState(initialstate);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(obj => setdata(obj.data));
    })


    return (
        <React.Fragment>
            {data.map(user => (
                <UserProfile key={user.id} user={user} />
            ))}
        </React.Fragment>
    );

}

export { ReqresUsers };
export default UserProfile;
