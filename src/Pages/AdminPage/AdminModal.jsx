import ModalAddVacationAll from './ModalAddVacationAll';
import ModalAttendLeaderboard from './ModalAttendLeaderboard';
import ModalShakeTeam from './ModalShakeTeam';

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
          attendUser={rowData.filter(user => user.attendeStatus === '참가')}
          addVacation={handleAddVacation}
          minusVacation={handleMinusVacation}
        />
      )}
      {isOpen === 'find' && (
        <ModalAttendLeaderboard
          setIsOpen={setIsOpen}
          attendUser={rowData.filter(user => user.attendeStatus === '참가')}
        />
      )}
      {isOpen === 'shake' && (
        <ModalShakeTeam
          setIsOpen={setIsOpen}
          attendUser={rowData.filter(user => user.attendeStatus === '참가')}
          onClickChangeShuffleTeam={handleChangeShuffleTeam}
        />
      )}
    </>
  );
};
export default AdminModal;
