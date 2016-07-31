import React, {Component} from 'react';

const ResultView = ({deal, diff, didi, uber, yidao, dist, speed, city}) => (
    <div style={{paddingTop: 30}}>
        <table className="ui selectable orange inverted table">
            <thead>
                <tr>
                    <th>比较</th>
                    <th>滴滴</th>
                    <th>Uber</th>
                    <th>易道</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>总价格</td>
                <td>{didi.toFixed(2)}元 <i className= { deal == '滴滴' ? 'icon  green checkmark' : ''}></i></td>
                <td>{uber.toFixed(2)}元 <i className= { deal == 'ber' ? 'icon  green checkmark' : ''}></i></td>
                <td>{yidao.toFixed(2)}元 <i className= { deal == '易到' ? 'icon  green checkmark' : ''}></i></td>
            </tr>
            </tbody>
        </table>

        <div>
            假设不同的车都会花一样的时间到达目的地，而城市里平均时速为 <span style={{color: 'red'}}>{speed}</span>公里每小时
            <div style={{paddingTop: 25}}>
                <span style={{paddingRight: 50}}>
                    距离目的地 <span style={{color: 'red', fontSize: '2em'}}>{dist}</span> 公里, 使用
                </span>
                <a className="ui red massive label">{deal}</a>

                <div className="ui red statistic" style={{paddingLeft: 100}}>
                    <div className="value">
                        {diff.toFixed(2)}<span style={{fontSize: '0.3em'}}>元</span>
                    </div>
                    <div className="label">
                        节省
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default class Result extends Component {
    render() {
        const dist = Number(this.props.dist);
        const speed = Number(this.props.speed);
        const minutes = Math.round(dist/speed*60);
        let didi = 2.4 * dist + 0.3 * minutes - 8;
        let uber = 2.63 * dist + 0.35 * minutes - 12;
        let yidao = (12 + 2.4 * (dist - 3) + 0.4 * minutes) * 0.7;

        let max = Math.max(Math.max(didi, uber), yidao);
        let min = Math.min(Math.min(didi, uber), yidao);

        let map = new Map();
        map.set(didi, '滴滴');
        map.set(uber, 'Uber');
        map.set(yidao, '易到');

        let deal = (didi === uber && didi === yidao) ? 'same' : map.get(min);
        let diff = max - min;

        return <ResultView {...{deal, diff, didi, uber, yidao, ...this.props}} />
    }
}