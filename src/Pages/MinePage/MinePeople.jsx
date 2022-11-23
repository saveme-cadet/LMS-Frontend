import { AuthContext } from 'Store';
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { MineService } from '../../API';

function MinePeople({ beginTime }) {
  const [users, setUsers] = useState([]);
  const auth = useContext(AuthContext);
  const userId = auth.status.userId;

  useEffect(() => {
    const getUsers = async () => {
      const res = await MineService.getOtherMine(userId);
      if (res) setUsers(res.data.map(el => el.name).join(', '));
    };
    getUsers();
    // NOTE: 아직 API 요청이 안됨
  }, [beginTime]);

  return (
    <MinePeopleContainer>
      <Title>⛏ 함께 공부중인 동료</Title>
      <Content>{users}</Content>
    </MinePeopleContainer>
  );
}

const MinePeopleContainer = styled.div`
  background-color: #f4f4f4;
  border-radius: 20px;
  min-height: 100px;
  margin: 0 20px;
  padding: 10px;
  box-sizing: border-box;
`;

const Title = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Content = styled.span`
  font-size: 18px;
  font-weight: 400;
  padding: 0 20px;
  white-space: wrap;
`;

export default MinePeople;
