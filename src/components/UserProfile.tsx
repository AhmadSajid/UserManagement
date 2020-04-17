import React from "react";

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


class ReqresUsers extends React.Component<{}, UserProfileState> {

    private url: string = "https://reqres.in/api/users";

    constructor(props: any) {
        super(props);

        this.state = {
            users: []
        };
    }


    componentDidMount() {
        fetch(this.url)
            .then(response => response.json())
            .then(obj => this.setState({
                users: obj.data
            }));
    }


    render() {
        return (
            this.state.users.map(user => (
                <UserProfile key={user.id} user={user} />
            ))
        );
    }
}

export { ReqresUsers };
export default UserProfile;
