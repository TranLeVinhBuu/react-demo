import Input from "antd/es/input/Input";
import Button from "antd/es/button/button";
import React, { useState } from "react";
import axios from "axios";
import create from "@ant-design/icons/lib/components/IconFont";
import { notification } from "antd";
const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    const res = await createUserApi(fullName, email, password, phone);
    if(res.data){
      notification.success({
        message: "Create user",
        description: "User has been created successfully",
      });
    }
    else{
      notification.error({
        message: "Error create user",
        description: JSON.stringify(res.message),
      });
    }
  };
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
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
        <div>
          <Button onClick={handleSubmit} type="primary">
            Create user
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
