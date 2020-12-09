import React from 'react';
import 'components/styles.css';
import { Image } from 'antd';
import Profile from 'assets/img/profile.png';

const ImageProfile = () => {
    return (
        <div className="image-profile">
            <Image src={Profile} width={300} />
            <div className="back-image"></div>
        </div>
    )
}

export default ImageProfile;