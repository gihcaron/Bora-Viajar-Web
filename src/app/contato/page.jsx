"use client";

import React, { useState } from "react";
import { Button, Form, Input, Rate, Skeleton } from "antd";
import styles from "../contato/Contato.module.css";
import Header from "../../components/Header";
import Image from "next/image";
import Footer from "../../components/Footer";


const Contato = () => {
  const [formDisabled, setFormDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Form values:", values);
    setLoading(true);
    setFormDisabled(true);
    setTimeout(() => {
      setLoading(false);
      setFormDisabled(false);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <Header bannerTitle={"BORA VIAJAR"} />

      <div className={styles.contatoWrapper}>
        <div className={styles.topBar}>
          <h1 className={styles.title}>Entre em Contato</h1>
          <div className={styles.aviao}>
            <Image
              src="/aviao.png"
              alt="paisagem"
              width={500}
              height={300}
              className={styles.contactImage}
            />
          </div>
          <p className={styles.subtitle}>
            Estamos sempre abertos a sugestões, dúvidas ou parcerias.
          </p>
        </div>

        <div className={styles.contentRow}>
          {loading ? (
            <Skeleton active paragraph={{ rows: 6 }}/>
          ) : (
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
              <Form.Item label="Avalie nossa plataforma" name="rating" className="rating">
                <Rate />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.submitButton}>
                  Enviar
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.infoBox1}>
            <h2 className={styles.infoTitle}>
              <Image
                src="/celular.png"
                alt="Informações de Contato"
                width={24}
                height={24}
              />
              Suporte ao Cliente
            </h2>
            <p className={styles.infoText}>Telefone: (19) 1234-5678</p>
            <p className={styles.infoText}>Email: contato@boraviajar.com.br</p>
            <p className={styles.infoText}>Atendimento: Seg a Sex, 9h às 18h</p>
          </div>

          <div className={styles.infoBox2}>
            <h2 className={styles.infoTitle}>
              <Image
                src="/anexo.png"
                alt="Informações de Contato"
                width={24}
                height={24}
              />
              Parcerias
            </h2>
            <p className={styles.infoText}>Envie sua proposta!</p>
            <p className={styles.infoText}>Telefone: (19) 1234-5678</p>
            <p className={styles.infoText}>Email: parceiro@boraviajar.com.br</p>
          </div>

          <div className={styles.infoBox3}>
            <h2 className={styles.infoTitle}>
              <Image
                src="/computador.png"
                alt="Informações de Contato"
                width={24}
                height={24}
              />
              Suporte Técnico
            </h2>
            <p className={styles.infoText}>Telefone (TI): (19) 1234-5678</p>
            <p className={styles.infoText}>Email: suporte@boraviajar.com.br</p>
          </div>
        </div>

        <div className={styles.mapBox}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.368392540495!2d-47.010399387728135!3d-22.97843564297745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cd9c133b52f5%3A0xbe859c603dcb641b!2sEscola%20SENAI%20de%20Valinhos!5e0!3m2!1spt-BR!2sbr!4v1747158652210!5m2!1spt-BR!2sbr"
            width="300%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contato;