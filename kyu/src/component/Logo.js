import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = ({margin,width}) => {
    const navigate = useNavigate();
    const logoClick = ()=>{
        navigate('/');
    }
    return (
        <>
            <img onClick={logoClick} src='/Logo.png' alt='이미지가 없습니다' onClick={logoClick} style={{justifyContent:'left', width:'70%'}} />
        </>
    );
};

export default Logo;

//사용법 <Logo width="넓이" margin="마진넓이" />