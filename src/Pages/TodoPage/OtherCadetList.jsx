import React, { useState, useEffect, useContext } from 'react';

import Styled from './TodoPage.styled';

import Checkbox from '@mui/material/Checkbox';

import { TodoService } from 'Network';
import { format } from 'date-fns';

const OtherCadetList = ({date}) => {
  const [othersToDo, setOthersToDo] = useState([]);
  const today = new Date();

  const getOthers = async () => {
    const result = await TodoService.getOthers(format(date, 'yyyy-MM-dd'));
    // console.log(result.data);
    setOthersToDo(result.data);
  };
  
  useEffect(() => {
    getOthers();
  }, []);

  return (
    <div className="othercadet">
      <div className="title">👀 다른 카뎃은 무엇을?</div>
      {format(new Date('2022-04-03'), 'yyyy-MM-dd') >
      format(date, 'yyyy-MM-dd') ? (
        <div className="notvaliddate" style={{ color: 'gray' }}>
          진행하지 않은 날짜입니다!
        </div>
      ) : (
        ''
      )}
      {format(today, 'yyyy-MM-dd') >= format(date, 'yyyy-MM-dd') ? (
        <div className="cadetlist" key="index">
          {othersToDo.map((item, index) => (
            <div key={index} className="cadet">
              <div key={index} className="othercadetname">
                {item.userName}
              </div>
              <div className="otherstodo">
                {item.todoDtoList.length === 0 ? (
                  <div className="none">
                    <span style={{ color: 'gray' }}>
                      등록된 할 일이 없습니다!
                    </span>
                  </div>
                ) : (
                  <div>
                    {item.todoDtoList.map((list, index) => (
                      <div key={index}>
                        <span className="otherstodolist">
                          {list.titleCheck === true ? (
                            <Checkbox
                              defaultChecked
                              sx={{
                                '& .MuiSvgIcon-root': { fontSize: 17 },
                              }}
                              disabled
                            />
                          ) : (
                            <Checkbox
                              sx={{
                                '& .MuiSvgIcon-root': { fontSize: 17 },
                              }}
                              disabled
                            />
                          )}
                        </span>
                        {list.titleCheck === false ? (
                          <span>{list.title}</span>
                        ) : (
                          <span
                            style={{
                              textDecorationLine: 'line-through',
                              color: 'gray',
                            }}
                          >
                            {list.title}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="notvaliddate" style={{ color: 'gray' }}>
          아직 진행하지 않은 날짜입니다!
        </div>
      )}
    </div>
  );
};

export default React.memo(OtherCadetList);
