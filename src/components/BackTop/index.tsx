import React, { useEffect } from 'react'
import { BackTop as BackTopButton } from 'antd'
import { UpCircleTwoTone, setTwoToneColor } from '@ant-design/icons';

export default function BackTop() {
    useEffect(() => {
        setTwoToneColor('#d4237a')
    }, [])
    return (
        <BackTopButton>
            <UpCircleTwoTone style={{ fontSize: 40 }} />
        </BackTopButton>
    )
}
