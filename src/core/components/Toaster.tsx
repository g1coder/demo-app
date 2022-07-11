import React, {useState, forwardRef, useImperativeHandle, useCallback} from 'react';
import {Portal, Snackbar} from '@mui/material';

const DURATION = 3000;

const Toaster = forwardRef((props, ref) => {
  const [snackbar, setSnackbar] = useState<{message: string; duration: number}>();
  const onClose = () => setSnackbar(undefined);

  const showMessage = useCallback((message: string) => {
    setSnackbar({
      message,
      duration: DURATION,
    });
  }, []);

  useImperativeHandle(ref, () => ({
    show: showMessage,
  }));

  return (
    <Portal>
      <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        open={snackbar != null}
        autoHideDuration={snackbar?.duration}
        onClose={onClose}
        message={snackbar?.message}
      />
    </Portal>
  );
});

export default Toaster;
