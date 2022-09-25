import { useState, useEffect } from 'react';
import { UserInfoService } from 'API';

import styled from 'styled-components';

import Button from '@mui/material/Button';

const shuffleArray = array => {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const ModalShakeTeam = ({ setIsOpen, attendUser, getUser }) => {
  const [curUsers, setCurUsers] = useState([]);
  const [neutral, setNeutral] = useState([]);

  const teamList = ['RED', 'BLUE', 'NONE'];

  // getUser를 받아 내부에서 사용하도록 수정
  const onClickChangeShuffleTeam = async (userId, team) => {
    const result = await UserInfoService.patchTeam(userId, { team: team });
    getUser();
  };

  const handleCloseModal = isAccept => {
    if (isAccept) {
      curUsers.map(user => {
        onClickChangeShuffleTeam(user.id, user.team);
      });
    }
    setIsOpen(false);
  };

  const handleShakeTeam = () => {
    const shakedUsers = shuffleArray(curUsers);
    const leastMember = shakedUsers.length / (teamList.length - 1);
    for (let i = 0; i < shakedUsers.length; i++) {
      let teamIndex = Math.floor(i / leastMember);
      shakedUsers[i].team = teamList[teamIndex];
    }
    setNeutral([]);
    setCurUsers(shakedUsers);
  };

  useEffect(() => {
    const neutralArray = [];
    attendUser.map(user => {
      if (!teamList.includes(user.team)) neutralArray.push(user);
    });
    setNeutral(neutralArray);
    setCurUsers(attendUser);
  }, []);

  return (
    <ModalShakeTeamBody>
      <h1>현재 팀 현황</h1>
      <h3>참가한 사용자들만 보여줍니다.</h3>
      {teamList.map(team => {
        return (
          <Team key={team}>
            <h1>{team}</h1>
            <Members>
              {curUsers.map((user, i) => {
                if (user.team === team)
                  return (
                    <MemberEach key={i} team={team}>
                      {user.userName}
                    </MemberEach>
                  );
              })}
            </Members>
          </Team>
        );
      })}
      <Button onClick={handleShakeTeam}>팀 섞기</Button>
      <Button onClick={() => handleCloseModal(true)}>확인</Button>
      <Button onClick={() => handleCloseModal(false)}>취소</Button>
    </ModalShakeTeamBody>
  );
};
const ModalShakeTeamBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(216, 216, 216, 0.9);
`;
const Team = styled.div``;
const Members = styled.div`
  display: flex;
  flex-direction: row;
`;
const MemberEach = styled.div`
  border-radius: 10%;
  margin: 5px;
  padding: 5px;
  background-color: ${props =>
    props.team === 'NONE'
      ? '#e3e3e3'
      : props.team === 'BLUE'
      ? '#0079f0'
      : '#dc143c'};
`;
export default ModalShakeTeam;
