import axios from 'axios';
import {FORM_ERROR} from 'final-form';
import ToastService from '@shared/api/services/ToastService';

function defaultHandler(error: Record<string, never>) {
  if (!error || error.ignore) return;

  if (axios.isCancel(error)) return;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(error);
  } else {
    ToastService.error(error.message);
  }
}

const hasMessage = (obj: unknown): obj is {message: string} => {
  return typeof obj === 'object' && obj !== null && 'message' in obj;
}

function defaultFormHandler(error: unknown) {
  if (hasMessage(error)) {
    return {[FORM_ERROR]: error.message};
  }
  return Error('Something went wrong');
}

export default {
  defaultHandler,
  defaultFormHandler
};
