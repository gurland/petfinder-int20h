import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';


import { Card, Input, Dropdown, TextArea, Form, Button } from 'semantic-ui-react';
import './style.scss';

function Auth({ action }) {
  const { handleChange, values, setFieldValue } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="main-content">
      <div className="auth-wrap">
        <h2>{action === 'REGISTER' ? 'Реєстрація ' : 'Вхід '} користувача</h2>

        <Card>
          <Card.Content>
            <Form>
              <Form.Field>
                <Input
                  placeholder="Емейл"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
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
          <Button positive>{action === 'REGISTER' ? 'Створити' : 'Увійти'}</Button>
        </div>
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
