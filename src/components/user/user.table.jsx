import { Table } from "antd";
import { getAllUserApi } from "../../services/api.service";
import { useEffect } from "react";

const UserTable = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
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

  const getAllUser = async () => {
    const res = await getAllUserApi();
    setDataUser(res.data);
  };  
  return <Table columns={columns} dataSource={dataUser} />;
};

export default UserTable;
