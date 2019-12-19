import React, { Component } from 'react'
import Child from './children'
import {Button} from 'antd'

export default class form extends Component {
    handleSearch=()=>{
        // 可在此通过 ref取值 value的值即子表单的值
        const value = this.form.getFormSchoolItemsValue()
    }
    resetForm = () => {
        this.form.handleResetForm()
      }
    render() {
        return (
            <div>
                <Button onClick={this.handleSearch}>查询</Button>
                <Child  wrappedComponentRef={form =>
                      (this.form = form)
                    }
                />
                <Button onClick={this.resetForm}>重置</Button>
            </div>
        )
    }
}
