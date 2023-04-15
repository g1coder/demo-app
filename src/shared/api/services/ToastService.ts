import {AlertColor} from '@mui/material/Alert/Alert';

export enum ToastType {
  NEW_MESSAGE,
  REMOVE_ALL,
}

type NewMessageAction = {
  type: ToastType.NEW_MESSAGE;
  payload: IToast;
};

type RemoveAllAction = {
  type: ToastType.REMOVE_ALL;
};

type Action = NewMessageAction | RemoveAllAction;

export interface IToast {
  level: AlertColor;
  body: string;
  onClose?: () => void;
}

type Subscription = (action: Action) => void;

let subscriptions: Subscription[] = [];

function subscribe(callback: Subscription) {
  subscriptions.push(callback);
  return () => {
    subscriptions = subscriptions.filter((subscription) => subscription !== callback);
  };
}

const emit = (action: Action) => {
  if (subscriptions.length === 0) return;
  subscriptions.forEach((subscription) => subscription(action));
};

function pop(level: AlertColor, message: string) {
  emit({
    type: ToastType.NEW_MESSAGE,
    payload: {
      level,
      body: message,
    },
  });
}

function remove() {
  emit({
    type: ToastType.REMOVE_ALL,
  });
}

export default {
  success: pop.bind(null, 'success'),
  info: pop.bind(null, 'info'),
  warning: pop.bind(null, 'warning'),
  error: pop.bind(null, 'error'),
  remove,
  subscribe,
};
