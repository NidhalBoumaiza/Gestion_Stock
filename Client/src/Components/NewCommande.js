import React from "react";
import { Form, Button, Input, Select, InputNumber } from "antd";
import Navbar from "./Navbar";

const { Option } = Select;

const NewCommande = () => {
  const [form] = Form.useForm();
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
          >
            <Form.Item name="Name" label="Nom du produit">
              <Select defaultValue={"Option 1"}>
                <Option value="Option 1">Option 1</Option>
                <Option value="Option 2">Option 2</Option>
                <Option value="Option 3">Option 3</Option>
                <Option value="Option 4">Option 4</Option>
              </Select>
            </Form.Item>

            <Form.Item name="CLIENT" label="Nom du client">
              <Input />
            </Form.Item>

            <Form.Item name="QTE" label="Quantité vendue">
              <InputNumber
                type={"number"}
                placeholder="Quantité"
                style={{ width: "50%" }}
              />
            </Form.Item>

            <Form.Item name="PRIX" label="Prix de vente">
              <InputNumber
                type={"number"}
                placeholder="Prix de vent"
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
              <Button type="primary">Ajouter</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewCommande;
