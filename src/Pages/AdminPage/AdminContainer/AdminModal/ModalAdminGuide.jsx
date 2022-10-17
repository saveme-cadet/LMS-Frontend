import React, { useRef } from 'react';
import styled from 'styled-components';

const ModalAdminGuide = ({ setIsOpen }) => {
  const modalRef = useRef();

  const handleModalClose = e => {
    if (modalRef.current === e.target) {
      setIsOpen(false);
    }
  };

  return (
    <ModalBackground onClick={handleModalClose} ref={modalRef}>
      <AdminTodo>
        <span>
          <h1>머슴 가이드</h1>
          <h3>
            머슴은 구해줘 카뎃의 봉사자 역할로써, 매주 각 팀마다 한 명씩 뽑게
            된다.
          </h3>
          <h3>
            머슴을 맡은 사람은 휴가 1일 <br />
            마지막 주 머슴을 맡은 사람은 휴가 2일을 지급받는다.
          </h3>
        </span>

        <ul>
          <li>체크인, 체크아웃을 진행한다.</li>
          <li>결석 점수가 위험한 인원을 관리한다.</li>
          <li>
            결석 점수가 3.0이 넘은 인원에게 구해줘 카뎃 지속 여부를 확인한다.
          </li>
          <li>
            매달 마지막 주 머슴은 결원 발생 시 다음 달 신규 인원을 모집한다.
          </li>
        </ul>
      </AdminTodo>
    </ModalBackground>
  );
};
const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(216, 216, 216, 0.9);
`;

const AdminTodo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 60%;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 30px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  span {
    text-align: center;
  }
  ul {
    margin: 50px;
  }
  li {
    padding: 10px 0;
    /* list-style: none; */
  }
`;
export default ModalAdminGuide;
