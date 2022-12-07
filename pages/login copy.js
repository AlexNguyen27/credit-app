import { Button, Card, Checkbox, Form, Input } from "antd";

export default function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="relative">
          <div className="absolute bottom-1/2 left-1/3 flex flex-col justify-center items-center w-[500px] m-auto text-2xl">
            <div>
              <p className="text-2xl mb-5">Đăng nhập</p>
            </div>
            <div>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Tên đăng nhập"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Mật khẩu"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{ offset: 8, span: 16 }}
                >
                  <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
      </div>
    </>
  );
}
