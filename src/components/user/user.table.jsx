import { notification, Popconfirm, Table } from "antd";
import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewUserDetail from "./view.user.detail";
import { deleteUserApi } from "../../services/api.service";
const UserTable = (props) => {
  const { dataUser, getAllUser } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);

  const [dataDetail, setDataDetail] = useState(null);
  const [isDataDetailOpen, setIsDataDetailOpen] = useState(false);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      render: (_, record) => {
        return (
          <a
            href="#"
            onClick={() => {
              setDataDetail(record);
              setIsDataDetailOpen(true);
            }}
          >
            {record.id}
          </a>
        );
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              setIsModalOpen(true);
            }}
            style={{ cursor: "pointer", color: "orange" }}
          />
          <Popconfirm
            title="Delete user"
            description="Are you sure to delete this user?"
            onConfirm={() => handleDeleteUser(record.id)}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleDeleteUser = async (id) => {
    const res = await deleteUserApi(id);
    if (res.data) {
      notification.success({
        message: "Delete user",
        description: "User has been deleted successfully",
      });
      await getAllUser();
    } else {
      notification.error({
        message: "Error delete user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataUser} />;
      <UpdateUserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        getAllUser={getAllUser}
      />
      <ViewUserDetail
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        isDataDetailOpen={isDataDetailOpen}
        setIsDataDetailOpen={setIsDataDetailOpen}
      />
    </>
  );
};

export default UserTable;
