"use client";
import React, { useEffect, useState } from "react";
import styles from "./Cadastro.module.css";

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
} from "antd";
const { Option } = Select;
const residences = [
  {
    value: "norte",
    label: "Norte",
    children: [
      {
        value: "acre",
        label: "Acre",
      },
      {
        value: "amapa",
        label: "Amapá",
      },
      {
        value: "amazonas",
        label: "Amazonas",
      },
      {
        value: "para",
        label: "Pará",
      },
      {
        value: "rondonia",
        label: "Rondônia",
      },
      {
        value: "roraima",
        label: "Roraima",
      },
      {
        value: "tocantins",
        label: "Tocantins",
      },
    ],
  },
  {
    value: "nordeste",
    label: "Nordeste",
    children: [
      {
        value: "alagoas",
        label: "Alagoas",
      },
      {
        value: "bahia",
        label: "Bahia",
      },
      {
        value: "ceara",
        label: "Ceará",
      },
      {
        value: "maranhao",
        label: "Maranhão",
      },
      {
        value: "paraiba",
        label: "Paraíba",
      },
      {
        value: "pernambuco",
        label: "Pernambuco",
      },
      {
        value: "piaui",
        label: "Piauí",
      },
      {
        value: "rio-grande-do-norte",
        label: "Rio Grande do Norte",
      },
      {
        value: "sergipe",
        label: "Sergipe",
      },
    ],
  },
  {
    value: "centro-oeste",
    label: "Centro-Oeste",
    children: [
      {
        value: "distrito-federal",
        label: "Distrito Federal",
      },
      {
        value: "goias",
        label: "Goiás",
      },
      {
        value: "mato-grosso",
        label: "Mato Grosso",
      },
      {
        value: "mato-grosso-do-sul",
        label: "Mato Grosso do Sul",
      },
    ],
  },
  {
    value: "sudeste",
    label: "Sudeste",
    children: [
      {
        value: "espirito-santo",
        label: "Espírito Santo",
      },
      {
        value: "minas-gerais",
        label: "Minas Gerais",
      },
      {
        value: "rio-de-janeiro",
        label: "Rio de Janeiro",
      },
      {
        value: "sao-paulo",
        label: "São Paulo",
      },
    ],
  },
  {
    value: "sul",
    label: "Sul",
    children: [
      {
        value: "parana",
        label: "Paraná",
      },
      {
        value: "rio-grande-do-sul",
        label: "Rio Grande do Sul",
      },
      {
        value: "santa-catarina",
        label: "Santa Catarina",
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
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle className={styles.telefone}>
      <Select style={{ width: 70 }}>
        <Option value="11">+11</Option>
        <Option value="12">+12</Option>
        <Option value="13">+13</Option>
        <Option value="14">+14</Option>
        <Option value="15">+15</Option>
        <Option value="16">+16</Option>
        <Option value="17">+17</Option>
        <Option value="18">+18</Option>
        <Option value="19">+19</Option>
        <Option value="21">+21</Option>
        <Option value="22">+22</Option>
        <Option value="24">+24</Option>
        <Option value="27">+27</Option>
        <Option value="28">+28</Option>
        <Option value="31">+31</Option>
        <Option value="32">+32</Option>
        <Option value="33">+33</Option>
        <Option value="34">+34</Option>
        <Option value="35">+35</Option>
        <Option value="37">+37</Option>
        <Option value="38">+38</Option>
        <Option value="41">+41</Option>
        <Option value="42">+42</Option>
        <Option value="43">+43</Option>
        <Option value="44">+44</Option>
        <Option value="45">+45</Option>
        <Option value="46">+46</Option>
        <Option value="47">+47</Option>
        <Option value="48">+48</Option>
        <Option value="49">+49</Option>
        <Option value="51">+51</Option>
        <Option value="53">+53</Option>
        <Option value="54">+54</Option>
        <Option value="55">+55</Option>
        <Option value="61">+61</Option>
        <Option value="62">+62</Option>
        <Option value="63">+63</Option>
        <Option value="64">+64</Option>
        <Option value="65">+65</Option>
        <Option value="66">+66</Option>
        <Option value="67">+67</Option>
        <Option value="68">+68</Option>
        <Option value="69">+69</Option>
        <Option value="71">+71</Option>
        <Option value="73">+73</Option>
        <Option value="74">+74</Option>
        <Option value="75">+75</Option>
        <Option value="77">+77</Option>
        <Option value="79">+79</Option>
        <Option value="81">+81</Option>
        <Option value="82">+82</Option>
        <Option value="83">+83</Option>
        <Option value="84">+84</Option>
        <Option value="85">+85</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="88">+88</Option>
        <Option value="89">+89</Option>
        <Option value="91">+91</Option>
        <Option value="92">+92</Option>
        <Option value="93">+93</Option>
        <Option value="94">+94</Option>
        <Option value="95">+95</Option>
        <Option value="96">+96</Option>
        <Option value="97">+97</Option>
        <Option value="98">+98</Option>
        <Option value="99">+99</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
        className={styles.selector}
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <div className={styles.container}>
      <div className={styles.LeftContainer}>
        <h1 className={styles.title}>Cadastre se </h1>
        <p className={styles.subtitle}>
          Crie uma conta para começar a planejar sua próxima viagem!
        </p>
        <h1 className={styles.BoraLogo}>
          {" "}
          Bora <span className={styles.hightlight}> Viajar</span>
        </h1>
      </div>
      <div className={styles.RightContainer}>
        <div className={styles.singnIn}></div>
        <div className={styles.head}></div>
        <div className={styles.form}>
          <h1 className={styles.formTitle}>Formulário de Cadastro</h1>

          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{ residence: ["Região", "Estado"], prefix: "86" }}
            className={styles.form2}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              className={styles.email}
              rules={[
                {
                  type: "email",
                  message: "O seu e-mail não é válido!",
                },
                {
                  required: true,
                  message: "Por favor, insira seu e-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Senha"
              label="Senha"
              className={styles.senha}
              rules={[
                {
                  required: true,
                  message: "Por favor, insira sua senha!",
                },
                {
                  pattern: /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/,
                  message:
                    "A senha deve ter pelo menos 6 caracteres e um caractere especial!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="ConfirmarSenha"
              label="Confirme sua Senha"
              dependencies={["Senha"]}
              className={styles.senha}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Por favor, confirme sua senha!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("Senha") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("A nova senha digitada não confere!")
                    );
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
              className={styles.nome}
              rules={[
                {
                  required: true,
                  message: "Favor colocar um nome de usuário",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="residence"
              label="Habitual Residence"
              className={styles.residencia}
              rules={[
                {
                  type: "array",
                  required: true,
                  message: "Please select your habitual residence!",
                },
              ]}
            >
              <Cascader options={residences} />
            </Form.Item>

            <Form.Item
              name="telefone"
              label="Telefone"
              rules={[
                { required: true, message: "Favor, insira seu telefone" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="Biografia"
              label="Biografia"
              className={styles.biografia}
              rules={[
                {
                  required: true,
                  message: "Por favor adicione uma breve descrição",
                },
              ]}
            >
              <Input.TextArea showCount maxLength={300} />
            </Form.Item>

            <Form.Item
              name="Gênero"
              label={<label className={styles.label}>Gênero</label>}
              className={styles.genero}
              rules={[
                { required: true, message: "Favor, selecione seu gênero!" },
              ]}
            >
              <Select placeholder="Selecione seu gênero">
                <Option value="male">Homem</Option>
                <Option value="female">Mulher</Option>
                <Option value="other">Outro</Option>
                <Option value="none">Prefiro não informar</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="Aceitar termos"
              valuePropName="checked"
              className={styles.termos}
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error("Você deve aceitar os termos!")
                        ),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                Eu li e concordo com os{" "}
                <a href="/termos">termos de uso e privacidade</a>
              </Checkbox>
            </Form.Item>
          </Form>
          <div
            style={{
              textAlign: "center",
              marginTop: 16,
              width: "65%",
              alignItems: "center",
              marginLeft: "11rem",
            }}
          >
            <button
              className={styles.entrarButton}
              type="button"
              onClick={() => (window.location.href = "/feed")}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cadastro;
