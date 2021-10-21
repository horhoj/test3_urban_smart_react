import * as yup from 'yup';
import { VALIDATION_ERROR_REQUIRED } from '../../config/validation';

export const CredentialDataSchema = yup.object({
  login: yup
    .string()
    .oneOf(['developer21'], 'вы должны ввести "developer21"')
    .required(VALIDATION_ERROR_REQUIRED),
  password: yup
    .string()
    .oneOf(['123456'], 'вы должны ввести "123456"')
    .required(VALIDATION_ERROR_REQUIRED),
});

export interface CredentialData
  extends yup.Asserts<typeof CredentialDataSchema> {}
