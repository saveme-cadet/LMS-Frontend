import { useState, useEffect } from 'react';

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

const ShakeTeam = ({ attendUser, onClickChangeShuffleTeam }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [curUsers, setCurUsers] = useState([]);
  const [neutral, setNeutral] = useState([]);

  const teamList = ['red', 'blue'];

  const handleCloseModal = isAccept => {
    console.log(curUsers);
    if (isAccept) {
      curUsers.map(user => {
        console.log(user.id, user.team);
        onClickChangeShuffleTeam(user.id, user.team);
      });
    }
    setIsOpen(!isOpen);
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
    const newtralArray = [];
    attendUser.map(user => {
      if (!teamList.includes(user.team)) newtralArray.push(user);
    });
    // console.log('attendUser : ', attendUser);
    // console.log('newtralArray : ', newtralArray);
    setNeutral(newtralArray);
    setCurUsers(attendUser);
  }, [isOpen]);

  useEffect(() => {
    console.log('isChanged?');
  }, [curUsers]);
  return (
    <div className="box">
      <h1>팀섞기</h1>
      <h3>
        실수로 누를 수도 있으니 확정하시겠습니까 버튼으로 API 전송 or 문자 따라
        치기 상태가 참가인 유저에 한해서 섞기, 모달창 띄울까?
      </h3>
      <Button
        onClick={() => {
          handleCloseModal(false);
        }}
      >
        자동으로 팀 섞기
      </Button>
      {isOpen && (
        <div className="modal">
          <h1>현재 팀 현황</h1>
          <h3>참가한 사용자들만 보여줍니다.</h3>
          <div className="team-list">
            {teamList.map(team => {
              return (
                <div key={team} className={`team ${team}`}>
                  <h1>{team}</h1>
                  <div className="team-member">
                    {curUsers.map(user => {
                      if (user.team === team) return <div>{user.userName}</div>;
                    })}
                  </div>
                </div>
              );
            })}
            <div className="team newtral">
              <h1>neutral</h1>
              {neutral.map((user, i) => (
                <div key={i}>{user.userName}</div>
              ))}
            </div>
          </div>
          <Button onClick={handleShakeTeam}>팀 섞기</Button>

          <Button onClick={() => handleCloseModal(true)}>확인</Button>
          <Button onClick={() => handleCloseModal(false)}>취소</Button>
        </div>
      )}
    </div>
  );
};

export default ShakeTeam;
