import React, { Component } from 'react'
import Child from './children'
export default class index extends Component {

    constructor(props){
        super(props)
        
    // 可以把除查询表单分离出去作为一个子组件  在父组件里面
    this.CreateChildren = Form.create({
        onValuesChange: this.handleValueChange
    })(Child);
    }
    // 获取弹框表单    使用这个方法从子组件取值
    handleValueChange = (props, changeValues, allValues) => {
        // 获取表单的值
        this.setState({
            data: allValues
        });
    };
    
    render() {
        return (
            <div>
                {/* 可在此进行传值 */}
                <this.CreateChildren/>  
            </div>
        )
    }
}
