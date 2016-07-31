import React from 'react';
import { mount } from 'react-mounter';

import { Layout, LayoutSetting } from '../../imports/ui/Layout';
import { Menu } from '../../imports/ui/Menu';
import { Table } from '../../imports/ui/Table';
import Compare from '../../imports/ui/Compare';
import Result from '../../imports/ui/Result';
import { Setting } from '../../imports/ui/Setting';

FlowRouter.route('/', {
    action() {
        mount( Layout,{
            menu: <Menu activeOne={'home'}/>,
            content: (
                <div>
                    <Table />
                    <Compare />
                </div>)
        });
    }
});

FlowRouter.route('/p/:dist', {
    action(params, queryParams) {
        mount(Layout, {
            menu: <Menu activeOne={'home'}/>,
            content: (
                <div>
                    <Table />
                    <Compare />
                    <Result {...params} {...queryParams}/>
                </div>
            )
        });
    }
});

FlowRouter.route('/about', {
    action() {
        mount( LayoutSetting,{
            menu: <Menu activeOne={'about'} />,
            content: <h4 className="ui info message">This is a simple semantic-ui demo</h4>,
            name: <h2>关于</h2>
        });
    }
});

FlowRouter.route('/more', {
    action() {
        mount( LayoutSetting, {
            menu: <Menu activeOne={'more'} />,
            content:<div></div>,
            name: <h2>更多</h2>
        });
    }
});

FlowRouter.route('/setting', {
    action() {
        mount( LayoutSetting, {
            menu: <Menu activeOne={'setting'} />,
            content: <Setting/>,
            name: <h2>设置</h2>
        });
    }
});

FlowRouter.notFound = {
    action() {
        alert('not find');
        FlowRouter.go('/');
    }
}
