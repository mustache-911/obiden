import styles from './modal.module.css';
import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material'; 
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // minWidth: 200,
  // maxWidth: 650,
  width: 650,
  // maxHeight: 560,
  // minHeight: 100,
  height: 560,
  bgcolor: '#eee',
  border: '2px solid #F0A528',
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return ( 
    <div className={styles.cardContainer}>
      <Box className={styles.card} onClick={handleOpen}>
          <Box style={{backgroundImage: props.urlImage}} className={styles.profilePicture} />
          <Box className={styles.textBox}>
            <Typography id="modal-modal-title" variant="h4" sx={{fontWeight: 'medium', fontSize: 28, mb: 1, color: '#333', textTransform: 'uppercase'}} className={styles.text}>
              {props.title}
            </Typography>
            <Typography id="modal-modal-subtitle" variant="subtitle2" sx={{fontWeight: 'medium', fontSize: 12, color: '#999', textTransform: 'uppercase'}} className={styles.text}>
              {props.subtitle}
            </Typography>
          </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="column" justifyContent="center">
            <Box style={{ backgroundImage: props.urlImage, display: 'block'}} className={styles.imageModal}>
            </Box>
            <Typography id="modal-modal-title" variant="h4" sx={{fontWeight: 'medium', fontSize: 28, margin: 1.2, color: '#333', textAlign: 'center', display: 'block', textTransform: 'uppercase'}} className={styles.text}>
              {props.title}
            </Typography>
            <Typography id="modal-modal-subtitle" variant="subtitle2" sx={{fontWeight: 'medium', fontSize: 12, color: '#999', mb: 2, textAlign: 'center', display: 'block', textTransform: 'uppercase'}} className={styles.text}>
              {props.subtitle}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, display: 'block', textAlign: 'justify' }} className={styles.text}>
              {props.description}
            </Typography>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}