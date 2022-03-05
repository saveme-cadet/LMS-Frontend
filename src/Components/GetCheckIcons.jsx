import CheckIcon from '@mui/icons-material/Check';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CloseIcon from '@mui/icons-material/Close';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HotelIcon from '@mui/icons-material/Hotel';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
const GetCheckIcons = ({ type }) => {
  console.log('type : ', type);
  switch (type) {
    case 1:
      return <CheckIcon className="check" />;
    case 2:
      return <PriorityHighIcon className="late" />;
    case 3:
      return <CloseIcon className="not" />;
    case 4:
      return <BusinessCenterIcon className="vacancy" />;
    case 5:
      return <HotelIcon className="illness" />;
    case 6:
      return <AirplanemodeActiveIcon />;
    default:
      return <CheckIcon className="0" />;
  }
};

export default GetCheckIcons;
