
import { format } from 'date-fns';
import { getDayName } from 'Utils';

const ShowToday = ({ date }) => {

  return (
    <div className="show-today header">
    <h1>
      {format(date, 'yyyy/MM/dd')} {getDayName(date.getDay())}
    </h1>

    </div>
  );
};

export default ShowToday;
