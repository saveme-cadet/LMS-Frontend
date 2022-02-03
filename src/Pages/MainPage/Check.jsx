import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';

const Check = ({ anchorEl, setAnchorEl, onChangeCheck }) => {
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onChangeCheck('출석')}>
            <ListItemText primary="출석" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onChangeCheck('지각')}>
            <ListItemText primary="지각" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onChangeCheck('결석')}>
            <ListItemText primary="결석" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onChangeCheck('공결')}>
            <ListItemText primary="공결" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onChangeCheck('병가')}>
            <ListItemText primary="병가" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onChangeCheck('휴가')}>
            <ListItemText primary="휴가" />
          </ListItemButton>
        </ListItem>
      </List>
    </Popover>
  );
};

export default Check;
