import React from 'react'
import { Divider } from 'antd'
import { EnvironmentOutlined, WhatsAppOutlined, DisconnectOutlined } from '@ant-design/icons';
import './index.css'

export default function index() {
    return (
        <div>
            <Divider>联系方式</Divider>
            <div><EnvironmentOutlined className='iconStyle' />四川省 成都市</div>
            <div><WhatsAppOutlined className='iconStyle' />13594347817</div>
            <div><DisconnectOutlined className='iconStyle' />admin@peakchao.com</div>
        </div>
    )
}
