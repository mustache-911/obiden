import styles from './modal.css';
import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material'; 
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 560,
  bgcolor: 'background.paper',
  border: '2px solid #F0A528',
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
//   overflow: 'scroll',
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return ( 
    <div>
      <Box sx={{width: 300, height: 300, bgcolor: 'orange', margin: 2, cursor: 'pointer'}} onClick={handleOpen}>
        <Stack direction="column" justifyContent="center" className={styles.flex}>
            <Box style={{backgroundImage: "url(./Home/mickey_mouse.jpg)", width: 150, height: 150}} className={styles.profilePicture} />
            <Box sx={{bgcolor: '#fff', borderRadius: 2}}>
                {props.title}
            </Box>
        </Stack>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="column" justifyContent="center">
            <Box style={{ backgroundImage: "url(./Home/mickey_mouse.jpg)", width: 300, height: 300}} className={styles.flex}>
            </Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {props.title}
            </Typography>
            <Typography id="modal-modal-subtitle" variant="h6" component="h2">
              {props.subtitle}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {props.description}
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}