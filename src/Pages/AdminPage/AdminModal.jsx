import ModalAddVacationAll from './ModalAddVacationAll';
import ModalAttendLeaderboard from './ModalAttendLeaderboard';
import ModalShakeTeam from './ModalShakeTeam';
import ModalAdminGuide from './ModalAdminGuide';

const AdminModal = ({
  setIsOpen,
  isOpen,
  rowData,
  handleChangeShuffleTeam,
  handleAddVacation,
  handleMinusVacation,
}) => {
  return (
    <>
      {isOpen === 'add' && (
        <ModalAddVacationAll
          setIsOpen={setIsOpen}
          attendUser={rowData.filter(
            user => user.attendStatus === 'PARTICIPATED',
          )}
          addVacation={handleAddVacation}
          minusVacation={handleMinusVacation}
        />
      )}
      {isOpen === 'find' && (
        <ModalAttendLeaderboard
          setIsOpen={setIsOpen}
          attendUser={rowData.filter(
            user => user.attendStatus === 'PARTICIPATED',
          )}
        />
      )}
      {isOpen === 'shake' && (
        <ModalShakeTeam
          setIsOpen={setIsOpen}
          attendUser={rowData.filter(
            user => user.attendStatus === 'PARTICIPATED',
          )}
          onClickChangeShuffleTeam={handleChangeShuffleTeam}
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
