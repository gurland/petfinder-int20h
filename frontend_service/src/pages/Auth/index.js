import React, { useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import { Card, Input, Form, Button } from 'semantic-ui-react';
import { login, register } from '../../utils/api/requests';
import './style.scss';
import { useHistory } from 'react-router-dom';
import { links } from '../../utils/constants';
import { actions, store } from '../../utils/store';

function Auth({ action }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const { dispatch } = useContext(store);

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      let result;

      setLoading(true);
      if (action === 'REGISTER') {
        result = await register(values);
      } else if (action === 'LOGIN') {
        result = await login(values);
      }

      setLoading(false);
      const { data, status } = result;

      if (status === 200) {
        localStorage.setItem('accessToken', data.access_token);
        history.push(links.homepage);
        dispatch({ type: actions.SET_AUTHORIZED, payload: true });
        dispatch({ type: actions.SET_CURRENT_PAGE, payload: links.homepage });
      } else if (status === 401) {
        setError('Неправильний логін або пароль');
      } else if (status === 409) {
        setError('Користувач вже існує');
      } else {
        setError('Невідома помилка');
      }
    },
  });

  return (
    <div className="auth-wrap">
      <h2>{action === 'REGISTER' ? 'Реєстрація ' : 'Вхід '} користувача</h2>

      <Card>
        <Card.Content>
          <Form>
            <Form.Field>
              <Input placeholder="Емейл" type="email" name="email" onChange={handleChange} value={values.email} />
            </Form.Field>
            <Form.Field>
              <Input
                className="mb-0"
                type="password"
                placeholder="Пароль"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>

      <div className="bottom-btn-wrap">
        <span style={{ color: 'darkred' }}>{error}</span>
        <Button onClick={handleSubmit} positive loading={loading}>
          {action === 'REGISTER' ? 'Створити' : 'Увійти'}
        </Button>
      </div>
    </div>
  );
}

Auth.propTypes = {
  action: PropTypes.oneOf(['REGISTER', 'LOGIN']),
};

Auth.defaultProps = {
  action: 'REGISTER',
};

export default Auth;
