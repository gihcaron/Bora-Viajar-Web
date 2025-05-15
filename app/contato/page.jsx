"use client";

import React, { useState } from "react";
import { Button, Form, Input, Checkbox } from "antd";
import styles from "../contato/Contato.module.css";
import Header from "../../components/Header";

const Contato = () => {
  const [formDisabled, setFormDisabled] = useState(false);

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div style={styles.container}>
      <Header bannerTitle={"BORA VIAJAR"} />

      <div className={styles.contatoWrapper}>
        <div className={styles.topBar}>
          <h1 className={styles.title}>Entre em contato</h1>
          <p className={styles.subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className={styles.subtitle}>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>

        <Form
          layout="vertical"
          onFinish={onFinish}
          disabled={formDisabled}
          className={styles.form}
        >
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true, message: "Por favor, insira seu nome!" }]}
          >
            <Input placeholder="Digite seu nome" className={styles.input} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Por favor, insira seu email!" },
              { type: "email", message: "Por favor, insira um email válido!" },
            ]}
          >
            <Input placeholder="Digite seu email" className={styles.input} />
          </Form.Item>

          <Form.Item
            label="Mensagem"
            name="message"
            rules={[{ required: true, message: "Por favor, insira sua mensagem!" }]}
          >
            <Input.TextArea
              placeholder="Digite sua mensagem"
              rows={4}
              className={styles.textarea}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.submitButton}>
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contato;