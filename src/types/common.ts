import { USER_ROLE } from '@/constants/role';
import React from 'react';
import { IconType } from 'react-icons';
export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: React.ReactNode;
  
}

export type UserRole = keyof typeof USER_ROLE;