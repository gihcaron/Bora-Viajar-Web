"use client";
import styles from "../cadastro/Cadastro.module.css";
import React, { useState } from 'react';

import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';
const { Option } = Select;
const residences = [
    {
        value: 'norte',
        label: 'Norte',
        children: [
            {
                value: 'acre',
                label: 'Acre',
            },
            {
                value: 'amapa',
                label: 'Amapá',
            },
            {
                value: 'amazonas',
                label: 'Amazonas',
            },
            {
                value: 'para',
                label: 'Pará',
            },
            {
                value: 'rondonia',
                label: 'Rondônia',
            },
            {
                value: 'roraima',
                label: 'Roraima',
            },
            {
                value: 'tocantins',
                label: 'Tocantins',
            },
        ],
    },
    {
        value: 'nordeste',
        label: 'Nordeste',
        children: [
            {
                value: 'alagoas',
                label: 'Alagoas',
            },
            {
                value: 'bahia',
                label: 'Bahia',
            },
            {
                value: 'ceara',
                label: 'Ceará',
            },
            {
                value: 'maranhao',
                label: 'Maranhão',
            },
            {
                value: 'paraiba',
                label: 'Paraíba',
            },
            {
                value: 'pernambuco',
                label: 'Pernambuco',
            },
            {
                value: 'piaui',
                label: 'Piauí',
            },
            {
                value: 'rio-grande-do-norte',
                label: 'Rio Grande do Norte',
            },
            {
                value: 'sergipe',
                label: 'Sergipe',
            },
        ],
    },
    {
        value: 'centro-oeste',
        label: 'Centro-Oeste',
        children: [
            {
                value: 'distrito-federal',
                label: 'Distrito Federal',
            },
            {
                value: 'goias',
                label: 'Goiás',
            },
            {
                value: 'mato-grosso',
                label: 'Mato Grosso',
            },
            {
                value: 'mato-grosso-do-sul',
                label: 'Mato Grosso do Sul',
            },
        ],
    },
    {
        value: 'sudeste',
        label: 'Sudeste',
        children: [
            {
                value: 'espirito-santo',
                label: 'Espírito Santo',
            },
            {
                value: 'minas-gerais',
                label: 'Minas Gerais',
            },
            {
                value: 'rio-de-janeiro',
                label: 'Rio de Janeiro',
            },
            {
                value: 'sao-paulo',
                label: 'São Paulo',
            },
        ],
    },
    {
        value: 'sul',
        label: 'Sul',
        children: [
            {
                value: 'parana',
                label: 'Paraná',
            },
            {
                value: 'rio-grande-do-sul',
                label: 'Rio Grande do Sul',
            },
            {
                value: 'santa-catarina',
                label: 'Santa Catarina',
            },
        ],
    },
];
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Cadastro = () => {

  const [form] = Form.useForm();
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ residence: ['Região', 'Estado'], prefix: '86' }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'O seu e-mail não é válido!',
          },
          {
            required: true,
            message: 'Por favor, insira seu e-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Senha"
        label="Senha"
        rules={[
          {
            required: true,
            message: 'Por favor, insira sua senha!',
          },
        ]}
        hasFeedback
      >

        {/* Senha - Confirmação */}

        <Input.Password />
      </Form.Item>

      <Form.Item
        name="ConfirmarSenha"
        label="Confirme sua Senha"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Por favor, confirme sua senha!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('A nova senha digitada não confere!'));
            },
          }),
        ]}
      >
        <Input.Password />

      </Form.Item>

        {/* Criar nome para usuário */}
      <Form.Item
        name="Nome de usuário"
        label="Nome de usuário"
        tooltip="Como você gostaria de ser chamado?"
        rules={[{ required: true, message: 'Favor colocar um nome de usuário', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Habitual Residence"
        rules={[
          { type: 'array', required: true, message: 'Please select your habitual residence!' },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="donation"
        label="Donation"
        rules={[{ required: true, message: 'Please input donation amount!' }]}
      >
        <InputNumber addonAfter={suffixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="website"
        label="Website"
        rules={[{ required: true, message: 'Please input website!' }]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="intro"
        label="Intro"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[{ required: true, message: 'Please input the captcha you got!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Cadastro;