import React from 'react';
import { FormikConfig, useFormik } from 'formik';
import styled from 'styled-components';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { CredentialData, CredentialDataSchema } from './types';

const initialValues: CredentialData = {
  login: '',
  password: '',
};

export const SignInPage: React.FC = () => {
  const formikConfig: FormikConfig<CredentialData> = {
    initialValues,
    onSubmit: (values) => {
      const msg = JSON.stringify(values, null, 2);
      alert(msg);
    },
    validationSchema: CredentialDataSchema,
    validateOnMount: true,
  };

  const formik = useFormik(formikConfig);

  return (
    <Wrap>
      <Form noValidate onSubmit={formik.handleSubmit} autoComplete={'off'}>
        <ElementWrap mt={0}>
          <Input
            label={'Логин'}
            placeholder={'Введите Ваше имя'}
            type={'text'}
            {...formik.getFieldProps('login')}
            showError={Boolean(formik.errors.login)}
            error={formik.errors.login}
          />
        </ElementWrap>
        <ElementWrap mt={10}>
          <Input
            label={'Пароль'}
            placeholder={'Введите Ваше имя'}
            type={'password'}
            {...formik.getFieldProps('password')}
            showError={Boolean(formik.errors.password)}
            error={formik.errors.password}
          />
        </ElementWrap>
        <ElementWrap mt={20}>
          <Button
            type={'submit'}
            disabled={!formik.isValid}
            caption={'Войти'}
          />
        </ElementWrap>
      </Form>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 20px;
  max-width: 460px;
  margin: 100px auto;
`;

const Form = styled.form`
  width: 100%;
`;

const ElementWrap = styled.div<{ mt: number }>`
  margin-top: ${({ mt }) => mt}px;
`;
