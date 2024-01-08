import {useMutation} from '@tanstack/react-query';
import {API} from '@shared/services';
import {ErrorModel} from '@shared/types';

export const useSubmitCart = () =>
  useMutation<unknown, ErrorModel>({
    mutationKey: ['submit-cart'],
    mutationFn: () => API.post(`/api/v1/cart/submit`),
  });
