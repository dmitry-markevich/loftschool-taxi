import React from 'react';
import Container from '@material-ui/core/container';
import Button from '@material-ui/core/button';

const ProfilePage = () => {
  return (
    <section className="tx-page tx-page-profile">
      <div className="tx-page-content">
        <Container maxWidth="md">
          <div className="tx-box ac">
            <h2>Профиль</h2>
            <p>Способ оплаты</p>
            <form className="tx-form">
              <Button type="submit">Сохранить</Button>
            </form>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ProfilePage;
