import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from "react";
import { getAllUserApi } from "../services/api.service";

const UserPage = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    const res = await getAllUserApi();
    setDataUser(res.data);
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <UserForm getAllUser={getAllUser} />
        <UserTable dataUser={dataUser} getAllUser={getAllUser} />
      </div>
    </div>
  );
};

export default UserPage;
