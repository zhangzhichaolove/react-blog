import React, { Component } from 'react';
import { Modal, Tag, Input, message as Message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.css'
import axios from 'axios';

interface IState {
    isModalVisible: boolean
    tags: Array<any>
    selectTags: Array<any>
    inputVisible: boolean
    inputValue: string
}

interface Iprops {
    handleOk?: Function
    handleCancel?: Function
}

export default class index extends Component<Iprops, IState> {

    inputRef: any

    constructor(props: any) {
        super(props)
        this.state = {
            isModalVisible: false,
            tags: [],
            selectTags: [],
            inputVisible: false,
            inputValue: '',
        }
    }

    show = () => {
        this.setState({ isModalVisible: true })
    }

    /**
     * prpos更新时会回调此方法，可通过返回值决定是否更新
     */
    // static getDerivedStateFromProps(nextProps: any, prevState: any) {
    //     if (nextProps.isModalVisible !== prevState.isModalVisible) {
    //         return { isModalVisible: prevState.isModalVisible }
    //     }
    //     return null
    // }

    /**
     * getDerivedStateFromProps更新后，这里会收到返回值，可以通过条件决定是否更新
     */
    // componentDidUpdate(prevProps: any, prevState: any) {
    //     console.log('componentDidUpdate-->', prevProps, prevState);
    //     if (prevProps.isModalVisible !== prevState.isModalVisible) {
    //         this.setState({ isModalVisible: prevProps.isModalVisible })
    //     }
    // }

    /**
     * componentWillReceiveProps过时，兼容实现
     */
    // UNSAFE_componentWillReceiveProps(nextProps: any, nextContext: any) {
    //     if (nextProps.isModalVisible !== this.state.isModalVisible) {
    //         this.setState({ isModalVisible: nextProps.isModalVisible })
    //     }
    // }

    componentDidMount() {
        this.getAllTag()
    }

    getAllTag = () => {
        axios('/api/findAllTag').then((res) => {
            const labels = res.data.result
            this.setState({ tags: labels })
        })
    }

    handleTagClick = (item: any) => {
        const isSelect = this.state.selectTags.filter(tag => tag.name === item.name).length > 0
        !isSelect && this.state.selectTags.push(item)
        const selectTags = isSelect ? this.state.selectTags.filter(tag => tag.name !== item.name) : this.state.selectTags
        this.setState({ selectTags })
    }

    mapTag = (item: any, index: number) => {
        const color = this.state.selectTags.filter(tag => tag.name === item.name).length > 0 ? 'magenta' : 'cyan'
        return (
            <Tag color={color} key={item.id} onClick={() => {
                this.handleTagClick(item)
            }} className='tagStyle'>{item.name}</Tag>
        )
    }

    handleOk = () => {
        this.props.handleOk && this.props.handleOk(this.state.selectTags)
        this.closeModal()
    }

    handleCancel = () => {
        this.props.handleCancel && this.props.handleCancel()
        this.closeModal()
    }

    closeModal = () => {
        this.setState({ isModalVisible: false })
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.inputRef.focus());
    }

    handleInputChange = (e: any) => {
        this.setState({ inputValue: e.target.value });
    }

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.filter(tag => tag.name === inputValue).length === 0) {
            let param = {
                name: inputValue
            }
            axios.post('/api/addTag', param).then((res) => {
                const { code } = res.data
                if (code === 200) {
                    Message.success('添加成功!');
                    this.getAllTag()
                }
            })
        }
        this.setState({
            inputVisible: false,
            inputValue: '',
        });

    }

    render() {
        const { tags, inputVisible, inputValue } = this.state;
        const tagChild = tags.map(this.mapTag)
        return (
            <>
                <Modal title="选择标签" cancelText='取消' okText='确定' visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    {tagChild}
                    {inputVisible ? <Input
                        ref={ref => this.inputRef = ref}
                        className='tagStyle'
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    /> :
                        <Tag onClick={this.showInput} className='tagStyle'>
                            <PlusOutlined /> 新标签
                </Tag>}
                </Modal>
            </>
        );
    }
}
