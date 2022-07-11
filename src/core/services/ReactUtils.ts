import {ComponentType, lazy} from 'react';

export const loadComponent = <T extends ComponentType<any>>(importFunction: () => Promise<{default: T}>) => lazy<T>(importFunction);