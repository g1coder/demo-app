import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import {API} from '@shared/services';
import {ErrorModel} from '@shared/types';
import {ICartItem} from '@entities/cart/types';

type TCartData = {items: Record<string, number>; totalCount: number; totalPrice: number};
type TCartDetails = {items: ICartItem[]; totalCount: number};

export const useCart = (options?: UseQueryOptions<TCartData, ErrorModel>) =>
  useQuery({
    queryKey: ['cart'],
    queryFn: () => API.get<TCartData>(`/api/v1/cart`),
    ...options,
  });

export const useCartDetails = (options?: UseQueryOptions<TCartDetails, ErrorModel>) =>
  useQuery({
    queryKey: ['cart-details'],
    queryFn: () => API.get<TCartDetails>(`/api/v1/cart-details`),
    ...options,
  });

export const useCartSummary = (options?: UseQueryOptions<TCartData, ErrorModel>) =>
  useQuery({
    queryKey: ['cart-summary'],
    queryFn: () => API.get<TCartData>(`/api/v1/cart-summary`),
    ...options,
  });
