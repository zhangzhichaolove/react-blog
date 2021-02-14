import React from 'react'
import { Divider } from 'antd'
import { EnvironmentOutlined, WhatsAppOutlined, MailOutlined } from '@ant-design/icons';
import './index.css'

export default function index() {
    return (
        <div>
            <Divider>联系方式</Divider>
            <div><EnvironmentOutlined className='iconStyle' />四川省 成都市</div>
            <div><WhatsAppOutlined className='iconStyle' />13594347817</div>
            <a href="mailto:admin@peakchao.com"><MailOutlined className='iconStyle' />admin@peakchao.com</a>
        </div>
    )
}
