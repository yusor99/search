import { Card, Button, Input } from "antd";

import StudentTable from "../components/StudentTable";
import AddModal from "../components/AddModal";
import StudentStore from "../store/studentStore";

const { Search } = Input;

const Home = () => {
  const { setIsModal, data, setData, backup, setBackup } = StudentStore();

  return (
    <div style={{ padding: "10%" }}>
      <Card
        hoverable
        title={
          <div className="flex">
            <Button onClick={() => setIsModal(true)}>Add New</Button>
            <Search
              placeholder="input search text"
              onSearch={(value) => {
                value? setData(data.filter((el) => el.name == value))
                  : setData(backup);
              }}
              style={{ width: 300 }}
            />
          </div>
        }
      >
        <StudentTable />
      </Card>
      <AddModal />
    </div>
  );
  console.log(setBackup);
};

export default Home;
