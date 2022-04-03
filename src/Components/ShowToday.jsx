import { format } from 'date-fns';
import { getDayName } from 'Utils';

const ShowToday = ({ date }) => {
  return (
    <div className="show-today header">
      {format(date, 'yyyy/MM/dd')} {getDayName(date.getDay())}
    </div>
  );
};

export default ShowToday;
