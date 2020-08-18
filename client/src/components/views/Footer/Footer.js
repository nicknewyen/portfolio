import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'.75rem'
        }}>
           <p><Icon type="heart" /> Designed & Coded by Nick Nguyen </p>
        </div>
    )
}

export default Footer
