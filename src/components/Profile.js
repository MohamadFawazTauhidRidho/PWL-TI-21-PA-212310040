import React from 'react';
import MyBio from './MyBio';

const Profile = () => {
    const myData = {
        name: ' Fawaz',
        age: 20
    }

    const HandlerHitme = () => {
        alert("Anda telah mengetuk saya");
    }

    const ClickMe = ({ children, onClickBtn }) => {
        return (
            <button type='button' onClick={() => onClickBtn()}>
                {children}
            </button>
        )
    }

    return (
        <div>
            <h1>Biodata:</h1>
            <MyBio name=" Mohamad Fawaz Tauhid Ridho" age="20" />
            <ClickMe onClickBtn={HandlerHitme}>
                Klik Saya!
            </ClickMe>

        </div>
    )
}

export default Profile;
