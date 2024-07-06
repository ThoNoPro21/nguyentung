"use client"
import useContactForm from "@/app/hooks/useFormContact";
import { Button, Form, Input } from "antd";
import { useState } from "react";
type FieldType = {
    email?: string;
    subject?: string;
    message?: string;
};

const ContactForm = () => {
    const { values, handleChange } = useContactForm();
    const handleSubmit = async (e: any) => {

        const res = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify((values.email, values.subject, values.message)),
        });

        const result = await res.json();
        alert(result.message);
    }

    return (
        <Form
            name="form-contact"
            layout="vertical"
            labelCol={{ span: 8, offset: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            className="w-64 "
            onFinish={handleSubmit}
        >
            <Form.Item<FieldType>
                label="Email"
                rules={[{ required: true, message: 'Không được bỏ trống!' }]}
            >
                <Input value={values.email}
                    name="email"
                    placeholder="Nhập email của bạn ..."
                    onChange={handleChange} />
            </Form.Item>

            <Form.Item<FieldType>
                label="Chủ đề"
                rules={[{ required: true, message: 'Không được bỏ trống!' }]}
            >
                <Input
                    name="subject"
                    value={values.subject}
                    placeholder="Nhập chủ đề ...VD:Cần tư vấn,mua hàng,..."
                    onChange={handleChange} />
            </Form.Item>

            <Form.Item<FieldType>
                label="Nội dung"
                rules={[{ required: true, message: 'Không được bỏ trống!' }]}
            >
                <Input.TextArea value={values.message}
                    name="message"
                    onChange={handleChange} rows={4} placeholder="Nội dung..." maxLength={100} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Gửi ngay
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ContactForm;