import React from 'react';

export const Layout = ({ menu, content }) => (
    <div>
        <div>{menu}</div>
        <div className="ui container" style={{paddingTop:10 }}>
            <h2>打车出行比价<span style={{color:'red', fontSize:'1.5em'}}>上海</span></h2>
            <hr /><hr />
            {content}
        </div>

    </div>
);

export const LayoutSetting = ({ menu, content, name }) => (
    <div>
        <div>{menu}</div>
        <div className="ui container" style={{paddingTop:10 }}>
            {name}
            <hr />
            {content}
        </div>
    </div>
);