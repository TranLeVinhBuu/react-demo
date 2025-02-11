import React, { useEffect, useState } from "react";
import Modal from "antd/es/modal/Modal";
import Input from "antd/es/input/Input";
import { updateUserApi } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");

  const { isModalOpen, setIsModalOpen, dataUpdate, setDataUpdate, getAllUser } =
    props;

  useEffect(() => {
    if (dataUpdate) {
      setId(dataUpdate.id);
      setFullName(dataUpdate.fullName);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);

  const handleSubmit = async () => {
    const res = await updateUserApi(id, fullName, phone);
    if (res.data) {
      notification.success({
        message: "Update user",
        description: "User has been updated successfully",
      });
      resetAndCloseModal();
      await getAllUser();
    } else {
      notification.error({
        message: "Error update user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetAndCloseModal = () => {
    setFullName("");
    setPhone("");
    setId("");
    setIsModalOpen(false);
    setDataUpdate(null);
  };

  return (
    <Modal
      title="Update user"
      open={isModalOpen}
      onOk={() => handleSubmit()}
      onCancel={() => resetAndCloseModal()}
      maskClosable={false}
      okText={"Save"}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Id</span>
          <Input value={id} disabled />
        </div>
        <div>
          <span>FullName</span>
          <Input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
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
  );
};

export default UpdateUserModal;
