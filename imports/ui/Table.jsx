import React from 'react';

export const Table = () => (
    <table className="ui selectable grey inverted table">
        <thead>
        <tr>
            <th>价格表</th>
            <th>滴滴</th>
            <th>Uber</th>
            <th>易到</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>每公里</td>
            <td>2.4元</td>
            <td>2.63元</td>
            <td>2.4元(起步12, 3km)</td>
        </tr>
        <tr>
            <td>每分钟</td>
            <td>0.3元</td>
            <td>0.35元</td>
            <td>0.4元</td>
        </tr>
        <tr>
            <td>优惠</td>
            <td>8元左右</td>
            <td>12元左右</td>
            <td>70%</td>
        </tr>
        </tbody>
    </table>
)

