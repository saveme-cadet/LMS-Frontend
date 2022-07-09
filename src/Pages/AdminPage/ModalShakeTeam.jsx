import { useState, useEffect } from 'react';

import styled from 'styled-components';

import Button from '@mui/material/Button';

const shuffleArray = array => {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    // [array[i], array[j]] = [array[j], array[i]];
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const ModalShakeTeam = ({
  setIsOpen,
  attendUser,
  onClickChangeShuffleTeam,
}) => {
  const [curUsers, setCurUsers] = useState([]);
  const [neutral, setNeutral] = useState([]);

  const teamList = ['red', 'blue'];

  const handleCloseModal = isAccept => {
    // console.log(curUsers);
    if (isAccept) {
      curUsers.map(user => {
        // console.log(user.id, user.team);
        onClickChangeShuffleTeam(user.id, user.team);
      });
    }
    setIsOpen(false);
  };

  const handleShakeTeam = () => {
    const shakedUsers = shuffleArray(curUsers);
    const leastMember = shakedUsers.length / teamList.length;
    // console.log('least : ', leastMember);
    for (let i = 0; i < shakedUsers.length; i++) {
      let teamIndex = Math.floor(i / leastMember);
      // console.log(teamIndex);
      shakedUsers[i].team = teamList[teamIndex];
    }
    // console.log(shakedUsers);
    setNeutral([]);
    setCurUsers(shakedUsers);
  };

  useEffect(() => {
    const neutralArray = [];
    attendUser.map(user => {
      if (!teamList.includes(user.team)) neutralArray.push(user);
    });
    // console.log('attendUser : ', attendUser);
    // console.log('neutralArray : ', neutralArray);
    setNeutral(neutralArray);
    setCurUsers(attendUser);
  }, []);

  useEffect(() => {
    // console.log('isChanged?');
  }, [curUsers]);
  return (
    <ModalShakeTeamBody>
      <h1>현재 팀 현황</h1>
      <h3>참가한 사용자들만 보여줍니다.</h3>
      <TeamList>
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
        <Team>
          <h1>neutral</h1>
          <Members>
            {neutral.map((user, i) => (
              <MemberEach team="neutral" key={i}>
                {user.userName}
              </MemberEach>
            ))}
          </Members>
        </Team>
      </TeamList>
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
const TeamList = styled.div``;
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
    props.team === 'neutral'
      ? 'gray'
      : props.team === 'blue'
      ? '#0079f0'
      : '#dc143c'};
`;
export default ModalShakeTeam;
