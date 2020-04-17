import React, { useState, useEffect } from "react";

interface GithubUserProfileProps {
    userName: string;
}

interface UserProfile {
    bio?: string;
    name?: string;
    avatar_url?: string;
    html_url?: string;
}

const isNotNullOrUndefined = (obj: any) => obj !== null && obj !== undefined;

function GithubUserProfile(props: GithubUserProfileProps) {

    const githubApi = `https://api.github.com/users/${props.userName}`;

    const userProfileInit: UserProfile = { bio: "" };
    const [userProfile, setUserProfile] = useState(userProfileInit);

    useEffect(() => {
        fetch(githubApi)
            .then(response => response.json())
            .then(user => setUserProfile(user));
    }, [props.userName])

    let userProfileBio = isNotNullOrUndefined(userProfile) && isNotNullOrUndefined(userProfile.bio)
        ? userProfile.bio : "X".repeat(20);

    userProfileBio = userProfileBio?.substring(0, 10)

    return (
        <div className="card" style={{ width: "18rem;" }}>
            <img className="card-img-top" src={userProfile.avatar_url} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Bio</h5>
                <p className="card-text">{`${userProfileBio}...`}</p>
                <a href={userProfile.html_url} className="btn btn-primary">Go to User Profile</a>
            </div>
        </div>
    );
}

export default GithubUserProfile;