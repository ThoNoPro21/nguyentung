"use client";
import useContactForm from "@/hooks/useFormContact";
import { Button, Form, Input, notification, Spin } from "antd";
import { sendEmailType } from "@/types/sendEmail";
import sendEmail from "@/app/lib/sendEmail/senEmail";
import { ReactNode, useEffect, useState } from "react";
import { validatePhoneNumber } from "@/validators/PhoneNumber";
import { validateEmail } from "@/validators/Email";
import { IconError, IconSucces } from "./IconComponent";

const ContactForm = () => {
  const [form] = Form.useForm();
  const [isLoading, setLoading] = useState(false);
  const { values, handleChange } = useContactForm();

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (icon:ReactNode,description:string) => {
    api.open({
      icon: icon,
      message: 'Thông báo',
      description: description,
	  placement:"bottomRight",
      showProgress: true,
    });
  };


  const handleSubmit = async () => {
    setLoading(true);
	try {
		const res = await sendEmail(values);
		const result = await res.json();
		if (result.success) {
			openNotification(
			<IconSucces />,
			"Cảm ơn bạn! Chúng tôi sẽ liên lạc với bạn sau !"
			);
			form.resetFields();
		} else  {
			openNotification(<IconError />, "Đã có lỗi xảy ra !");
		}
	} finally {
		setLoading(false);
	  }
  };

  return (
    <>
      {contextHolder}
      <Spin spinning={isLoading}>
        <Form
          form={form}
          name="form-contact"
          layout="vertical"
          labelCol={{ span: 16 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          autoComplete="on"
          className="w-full"
          onFinish={handleSubmit}
        >
          <Form.Item<sendEmailType>
            label="Email"
            name="emailFrom"
            hasFeedback
            validateDebounce={2000}
            rules={[
              { required: true, message: "Không được bỏ trống!" },
              { validator: validateEmail },
            ]}
          >
            <Input
              value={values.emailFrom}
              allowClear
              autoComplete="on"
              name="emailFrom"
              placeholder="Nhập email của bạn ..."
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item<sendEmailType>
            label="Số điện thoại"
            name="phoneNumber"
            hasFeedback
            validateDebounce={2000}
            rules={[
              { required: true, message: "Không được bỏ trống!" },
              { validator: validatePhoneNumber },
            ]}
          >
            <Input
              value={values.phoneNumber}
              name="phoneNumber"
              placeholder="Nhập số điện thoại của bạn..."
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item<sendEmailType>
            label="Nội dung"
            name="message"
            rules={[{ required: true, message: "Không được bỏ trống!" }]}
          >
            <Input.TextArea
              value={values.message}
              name="message"
              onChange={handleChange}
              rows={4}
              placeholder="Nội dung..."
              maxLength={100}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Gửi ngay
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </>
  );
};

export default ContactForm;
