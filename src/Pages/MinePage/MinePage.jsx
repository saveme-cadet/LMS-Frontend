import * as React from 'react';
import Timer from './Timer';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//시작 시간, 끝 시간을 자동 체크(표시)해주는 기능 추가(현재 시간을 받아오는 기능 -> 노마드코더 현재시간 표시 앱 참고)

const MinePage = () => {
  return (
    <form>
      <Timer />
    </form>
  );
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;
  // return (
  //   <div>
  //     <Button aria-describedby={id} variant="contained" onClick={handleClick}>
  //       Open Popover
  //     </Button>
  //     <Popover
  //       id={id}
  //       open={open}
  //       anchorEl={anchorEl}
  //       onClose={handleClose}
  //       anchorOrigin={{
  //         vertical: 'bottom',
  //         horizontal: 'left',
  //       }}
  //     >
  //       <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
  //     </Popover>
  //   </div>
  // );
};

export default MinePage;
