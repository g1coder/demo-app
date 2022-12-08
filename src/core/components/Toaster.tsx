import {Alert, Snackbar, SnackbarProps} from '@mui/material';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {IToast, ToastType} from 'core/services/ToastService';
import ToastService from 'core/services/ToastService';

const SHOW_DELAY = 3000;

const Toaster = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toasts, setToasts] = useState<IToast[]>([]);
  const [currentToast, setCurrentToast] = useState<IToast | null>(null);

  useEffect(() => {
    if (toasts.length && !currentToast) {
      setCurrentToast(toasts[0]);
      setToasts((prev) => prev.slice(1));
      setIsOpen(true);
    } else if (toasts.length && currentToast && isOpen) {
      setIsOpen(false);
    }
  }, [toasts, currentToast, isOpen]);

  useEffect(() => {
    return ToastService.subscribe((action) => {
      switch (action.type) {
        case ToastType.NEW_MESSAGE:
          setToasts((prev) => [...prev, action.payload]);
          break;
        case ToastType.REMOVE_ALL:
          setToasts([]);
          setIsOpen(false);
          break;
      }
    });
  }, []);

  const handleClose = useCallback((event: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
  }, []);

  const transitionProps: SnackbarProps['TransitionProps'] = useMemo(
    () => ({
      onExited: () => setCurrentToast(null),
    }),
    []
  );

  return (
    currentToast && (
      <Snackbar
        open={isOpen}
        autoHideDuration={SHOW_DELAY}
        onClose={handleClose}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        TransitionProps={transitionProps}
      >
        <Alert severity={currentToast.level} sx={{width: '100%'}}>
          {currentToast.body}
        </Alert>
      </Snackbar>
    )
  );
};

export default Toaster;
