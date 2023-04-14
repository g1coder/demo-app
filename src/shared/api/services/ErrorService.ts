import axios from 'axios';
import ToastService from '@shared/api/services/ToastService';

function defaultHandler(error: any = {ignore: true}) {
  if (!error || error.ignore) return;

  if (axios.isCancel(error)) return;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(error);
  } else {
    ToastService.error(error.message);
  }
}

export default {
  defaultHandler,
};
