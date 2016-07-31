import React from 'react';

export const Menu = ({activeOne}) => {
    const barStyle = {
        width: '31%'
    };
    return (
        <div className="ui container">
            <div className="ui pointing menu inverted">
                <a className={activeOne === 'home' ? 'active item' : 'item'} style={barStyle} href="/">
                    Home
                </a>
                <a className={activeOne === 'about' ? 'active item' : 'item'} style={barStyle} href="/about">
                    About
                </a>
                <a className={activeOne === 'more' ? 'active item' : 'item'} style={barStyle} href="/more">
                    More
                </a>
                <div className="right menu" style={{width:'7%'}}>
                    <a className={activeOne === 'setting' ? 'active item' : 'item'} href="/setting">
                        <i className="ui large setting icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}