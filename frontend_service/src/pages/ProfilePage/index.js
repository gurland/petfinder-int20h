import React from 'react';
import { Container, Form, Card, Input, Checkbox } from 'semantic-ui-react';

import { useFormik } from 'formik';

function ProfilePage() {
  const { handleChange, values, setFieldValue } = useFormik({
    initialValues: {
      email: '',
      password: '',
      username: '',
      contact_info: '',
      phone: '',
      telegram: '',
      notifications: false,
    },
  });

  return (
    <Container>
      <Form>
        <Card fluid>
          <Card.Content>
            <Form.Field>
              <Input
                type="email"
                placeholder="Електронна пошта"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </Form.Field>
            <Form.Field>
              <Input
                type="password"
                placeholder="Пароль"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
            </Form.Field>
            <Form.Field>
              <Input placeholder="Ім'я користувача" name="username" onChange={handleChange} value={values.username} />
            </Form.Field>
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Form.Field>
              <Input
                placeholder="Контактна інформація"
                name="contact_info"
                onChange={handleChange}
                value={values.contact_info}
              />
            </Form.Field>
            <Form.Field>
              <Input
                type="phone"
                placeholder="Мобільний телефон"
                name="phone"
                onChange={handleChange}
                value={values.phone}
              />
            </Form.Field>
            <Form.Field>
              <Input
                placeholder="Ім'я користувача в Telegram"
                name="telegram"
                onChange={handleChange}
                value={values.telegram}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                toggle
                label="Сповіщення"
                name="notifications"
                onChange={(e, data) => setFieldValue('notifications', data.checked)}
                value={values.notifications}
              />
            </Form.Field>
          </Card.Content>
        </Card>
      </Form>
    </Container>
  );
}

export default ProfilePage;
