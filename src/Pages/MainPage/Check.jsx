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
          <ListItemButton onClick={() => onChangeCheck(0)}>
            <ListItemText primary="null" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onChangeCheck(1)}>
            <ListItemText primary="출석" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onChangeCheck(2)}>
            <ListItemText primary="지각" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onChangeCheck(3)}>
            <ListItemText primary="결석" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onChangeCheck(4)}>
            <ListItemText primary="공결" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onChangeCheck(5)}>
            <ListItemText primary="병결" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => onChangeCheck(6)}>
            <ListItemText primary="휴가" />
          </ListItemButton>
        </ListItem>
      </List>
    </Popover>
  );
};

export default Check;
