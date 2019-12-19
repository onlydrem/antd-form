import React, { Component } from 'react';
import { Form, Select, Row, Col } from 'antd';


const FormItem = Form.Item;
const { Option } = Select;

class Children extends Component {

  componentDidMount() {

  }
  componentWillUnmount() {
    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
      return;
    };
  }
  // 获取所有授权教材的筛选项
  getStepTwoItemsValue = () => {
    const value = this.props.form.getFieldsValue();
    return value;
  };
  handleResetForm = e => {
    this.props.form.setFieldsValue({});
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const {
      classList,
      subject,
    } = this.state;
    return (
      <div className="box-step-two">
        <Form layout="horizontal" className="step-two">
          <Row gutter={10}>
            <Col span={4}>
              <FormItem>
                {getFieldDecorator('username')(
                  <Select
                    placeholder="请选择xxx"
                    style={{ marginRight: 10 }}
                    dropdownClassName="sele-height"
                    onChange={this.subjectChange}
                    dropdownMatchSelectWidth={true}
                  >
                    {subject &&
                      subject.map((item, index) => (
                        <Option key={index} value={item.id}>
                          {item.subjectName}
                        </Option>
                      ))}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem>
                {getFieldDecorator('class')(
                  <Select
                    placeholder="请选择xxx"
                    style={{ marginRight: 10 }}
                    dropdownClassName="sele-height"
                    onChange={this.classChange}
                    dropdownMatchSelectWidth={true}
                  >
                    {classList &&
                      classList.map((item, index) => (
                        <Option key={index} value={item.id}>
                          {item.className}
                        </Option>
                      ))}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem>
                {getFieldDecorator('Id')(
                  <Select
                    placeholder="请选择xxx"
                    style={{ marginRight: 10 }}
                    dropdownMatchSelectWidth={true}
                    onDropdownVisibleChange={this.volumeDropdownChange}
                  >
                    {Data &&
                      Data.map((item, index) => (
                        <Option key={index} value={item.id}>
                          {item.name}
                        </Option>
                      ))}
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const Child = Form.create()(Children);

export default Child;
