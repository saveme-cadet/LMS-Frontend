import { useState, useContext } from 'react';
import { AuthContext } from 'App';

import { ShowToday, NotValid } from 'Components';

import AdminContainer from './AdminContainer';
// import NewUserForm from './NewUserForm';

import styled from 'styled-components';

const AdminPage = () => {
  const [date, setDate] = useState(new Date());
  const auth = useContext(AuthContext);
  const userRole = auth.status.role;
  const userId = auth.status.userId;

  return (
    <AdminBackground>
      <AdminHeader>
        <ShowToday date={date} />
      </AdminHeader>
      <AdminBody>
        {userRole === '머슴' ? (
          <AdminContainer auth={auth} userId={userId} />
        ) : (
          <NotValid code={0} />
        )}
      </AdminBody>
    </AdminBackground>
  );
};

const AdminBackground = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;
const AdminHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  margin: 10px;
`;
const AdminBody = styled.div``;
export default AdminPage;
