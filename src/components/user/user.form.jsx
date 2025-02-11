import Input from "antd/es/input/Input";
import Button from "antd/es/button/button";
import React, { useState } from "react";
import { notification } from "antd";
import Modal from "antd/es/modal/Modal";
const UserForm = (props) => {

  const {getAllUser} = props;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    const res = await createUserApi(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: "Create user",
        description: "User has been created successfully",
      });
      resetAndCloseModal(); 
      await getAllUser();
    } else {
      notification.error({
        message: "Error create user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setIsModalOpen(false);
  }

  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table users</h3>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Create
        </Button>
      </div>

      <Modal
        title="Create user"
        open={isModalOpen}
        onOk={() => handleSubmit()}
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
        okText={"Create"}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>
            <span>FullName</span>
            <Input
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          <div>
            <span>Email</span>
            <Input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <span>Password</span>
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <span>Phone number</span>
            <Input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserForm;
