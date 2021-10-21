import React from 'react';
import { FormikConfig, useFormik } from 'formik';
import styled from 'styled-components';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAppDispatch } from '../../store/hooks';
import { authActions } from '../../store/auth';
import { CredentialData, CredentialDataSchema } from './types';

const initialValues: CredentialData = {
  login: '',
  password: '',
};

export const SignInPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const formikConfig: FormikConfig<CredentialData> = {
    initialValues,
    onSubmit: (values) => {
      dispatch(authActions.setIsAuthenticated(values.login));
    },
    validationSchema: CredentialDataSchema,
    validateOnMount: true,
  };

  const formik = useFormik(formikConfig);

  return (
    <Wrap>
      <Title>Вход в систему</Title>
      <Form noValidate onSubmit={formik.handleSubmit} autoComplete={'off'}>
        <ElementWrap mt={20}>
          <Input
            label={'Логин'}
            placeholder={'Введите Ваше имя'}
            type={'text'}
            {...formik.getFieldProps('login')}
            showError={
              Boolean(formik.touched.login) && Boolean(formik.errors.login)
            }
            error={formik.errors.login}
          />
        </ElementWrap>
        <ElementWrap mt={10}>
          <Input
            label={'Пароль'}
            placeholder={'Введите Ваш пароль'}
            type={'password'}
            {...formik.getFieldProps('password')}
            showError={
              Boolean(formik.touched.password) &&
              Boolean(formik.errors.password)
            }
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

const Title = styled.h1`
  text-align: center;
  color: #756f86;
`;
