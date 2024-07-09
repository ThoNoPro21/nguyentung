"use client"
import useContactForm from "@/app/hooks/useFormContact";
import { Button, Form, Input, Spin } from "antd";
import { sendEmailType } from "@/types/sendEmail";
import sendEmail from "@/app/lib/sendEmail/senEmail";
import { useState } from "react";

const ContactForm = () => {

    const [isLoading, setLoangding] = useState(false)
    const { values, handleChange } = useContactForm();
    const handleSubmit = async () => {
        setLoangding(true)
        const res = await sendEmail(values)
        const result = await res.json();
        setLoangding(false)
        console.log('Result:',result);
    }
    if (isLoading) {
        return <Spin fullscreen />
    }
    return (
        <Form
            name="form-contact"
            layout="vertical"
            labelCol={{ span: 8, offset: 24 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            autoComplete="on"
            className="w-full  "
            onFinish={handleSubmit}
        >
            <Form.Item<sendEmailType>
                label="Email"
                rules={[{ required: true, message: 'Không được bỏ trống!' }]}
            >
                <Input value={values.email}
                    name="email"
                    placeholder="Nhập email của bạn ..."
                    onChange={handleChange} />
            </Form.Item>

            <Form.Item<sendEmailType>
                label="Chủ đề"
                rules={[{ required: true, message: 'Không được bỏ trống!' }]}
            >
                <Input
                    name="subject"
                    value={values.subject}
                    placeholder="Nhập chủ đề ...VD:Cần tư vấn,mua hàng,..."
                    onChange={handleChange} />
            </Form.Item>

            <Form.Item<sendEmailType>
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