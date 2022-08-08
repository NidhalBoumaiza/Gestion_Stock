import React from "react";
import { Form, Button, Input, InputNumber } from "antd";
import Navbar from "./Navbar";
import { createProduct } from "./../Api/index";
const NewStock = () => {
  const [form] = Form.useForm();
  const Submit = async (formValues) => {
    try {
      const { data } = await createProduct(formValues);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="bg-light min-vh-100 h-100">
      <Navbar />
      <div className="d-flex justify-content-center mt-4">
        <div className="col-lg-6 col-md-7 col-sm-12 mt-2 shadow bg-white p-4 rounded-4">
          <Form
            form={form}
            labelCol={{
              xs: { span: 24 },
              sm: { span: 12 },
              md: { span: 8 },
              lg: { span: 8 },
            }}
            wrapperCol={{
              xs: { span: 24 },
              sm: { span: 12 },
              md: { span: 12 },
              lg: { span: 12 },
            }}
            layout="horizontal"
            size="middle"
            onFinish={Submit}
          >
            <Form.Item name="Name" label="Nom du produit">
              <Input placeholder="Nom Produit" />
            </Form.Item>

            <Form.Item name="quantity" label="Quantité Ajouter">
              <InputNumber
                type={"number"}
                placeholder="Quantité"
                style={{ width: "50%" }}
              />
            </Form.Item>
            <Form.Item name="price" label="Prix Unitaire">
              <InputNumber
                type={"number"}
                placeholder="Prix Unitaire"
                style={{ width: "50%" }}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                xs: { span: 24 },
                sm: { span: 12, offset: 12 },
                md: { span: 12, offset: 8 },
                lg: { span: 12, offset: 8 },
              }}
            >
              <Button type="primary" htmlType="submit">
                Ajouter
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewStock;
