###### 当一个react组件里面有多个form时

        当一个react组件有多个Dom? 那我们就不能使用
        this.props.form.validateFields((err, values) => {
        if (!err) {
           
            }
        })来取值
##### 常用办法1

        组件中只留一个，吧其余的独立出去为子组件
        index.js
##### 官网推荐方法 2

        也是把其他的form表单独立出去
        
        form.js