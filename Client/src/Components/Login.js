import React from "react";
// import { useState } from "react";
import { Button, Form, Input, Card, Typography } from "antd";

import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

function Login() {
  //   const [form] = Form.useForm();
  const Navigate = useNavigate();

  //   const [error, setError] = useState(null);

  //   const onFinish = async (formValues) => {
  //     try {
  //     } catch (error) {
  //       setError(error.response.data.message);
  //     }
  //   };

  return (
    <div className="row mx-0 justify-content-center pt-5">
      <div className="col-xl-5 col-lg-6 col-md-8 col-sm-12">
        <Card
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          title={
            <Title level={4} style={{ textAlign: "center" }}>
              Connectez-vous à votre compte
            </Title>
          }
          actions={[
            <div className="d-flex justify-content-end mx-5">
              <Text type="primary" className="mt-2" strong>
                ©2022 Gestion Stock
              </Text>
            </div>,
          ]}
        >
          <Form
            // form={form}
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 15,
            }}
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "S’il vous plaît entrer votre email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mot de passe"
              name="password"
              rules={[
                {
                  required: true,
                  message: "S’il vous plaît entrer votre mot de pass!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                lg: { offset: 5 },
                md: { offset: 5 },
                sm: { offset: 5 },
                xs: { offset: 0 },
                span: 15,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  Navigate("/home");
                }}
              >
                Se connecter
              </Button>
            </Form.Item>
            {/* {error && (
              <Form.Item
                wrapperCol={{
                  lg: { offset: 5 },
                  md: { offset: 5 },
                  sm: { offset: 5 },
                  xs: { offset: 0 },
                  span: 13,
                }}
              >
                <Text type="danger" strong>
                  {error}
                </Text>
              </Form.Item>
            )} */}
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Login;
