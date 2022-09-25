import ModalAddVacationAll from './ModalAddVacationAll';
import ModalAttendLeaderboard from './ModalAttendLeaderboard';
import ModalShakeTeam from './ModalShakeTeam';
import ModalAdminGuide from './ModalAdminGuide';

const AdminModal = ({
  setIsOpen,
  isOpen,
  rowData,
  getUser,
  setSelectUserId,
}) => {
  return (
    <>
      {isOpen === 'add' && (
        <ModalAddVacationAll
          setIsOpen={setIsOpen}
          attendUser={rowData.filter(
            user => user.attendStatus === 'PARTICIPATED',
          )}
          getUser={getUser}
          setSelectUserId={setSelectUserId}
          rowData={rowData}
        />
      )}
      {isOpen === 'find' && <ModalAttendLeaderboard setIsOpen={setIsOpen} />}
      {isOpen === 'shake' && (
        <ModalShakeTeam
          setIsOpen={setIsOpen}
          attendUser={rowData.filter(
            user => user.attendStatus === 'PARTICIPATED',
          )}
          getUser={getUser}
        />
      )}
      {isOpen === 'todo' && (
        // TODO: 모달 클릭 후 onKeyDown이 안먹힘(ESC)
        <ModalAdminGuide setIsOpen={setIsOpen} />
      )}
    </>
  );
};

export default AdminModal;
