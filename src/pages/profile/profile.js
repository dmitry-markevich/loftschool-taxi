import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { loadProfileUser, updateProfileUser } from '../../modules/user';

import { Grid, Container, Button, TextField } from '@material-ui/core';
import { MCIcon } from 'loft-taxi-mui-theme';

const ProfilePage = ({
  loadProfileUser,
  updateProfileUser,
  card,
  error,
  loading
}) => {
  const [cardInput, setCardInput] = useState(card.cardNumber);
  const [expiresInput, setExpiresInput] = useState(card.expiryDate);
  const [holderInput, setHolderInput] = useState(card.cardName);
  const [cvcInput, setCvcInput] = useState(card.cvc);

  useEffect(() => {
    loadProfileUser();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (cardInput && expiresInput && holderInput && cvcInput) {
      updateProfileUser({
        cardNumber: cardInput,
        expiryDate: expiresInput,
        cardName: holderInput,
        cvc: cvcInput
      });
    }
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'cardInput':
        setCardInput(e.target.value);
        break;
      case 'expiresInput':
        setExpiresInput(e.target.value);
        break;
      case 'holderInput':
        setHolderInput(e.target.value);
        break;
      case 'cvcInput':
        setCvcInput(e.target.value);
        break;
      default:
    }
  };

  return (
    <section className="tx-page tx-page-profile">
      <div className="tx-page-content">
        <Container maxWidth="md">
          <div className="tx-box">
            <h2 className="ac">Профиль</h2>
            <p className="ac">Способ оплаты</p>
            <form onSubmit={handleSubmit} className="tx-form">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <div className="tx-card">
                    <div className="tx-line tx-mclogo">
                      <MCIcon />
                    </div>
                    <div className="tx-line tx-full">
                      <TextField
                        label="Номер карты"
                        type="text"
                        name="cardInput"
                        value={cardInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="tx-line">
                      <TextField
                        label="Срок действия"
                        type="text"
                        name="expiresInput"
                        value={expiresInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="tx-card">
                    <div className="tx-line tx-full">
                      <TextField
                        label="Имя владельца"
                        type="text"
                        name="holderInput"
                        value={holderInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="tx-line">
                      <TextField
                        label="CVC"
                        type="text"
                        name="cvcInput"
                        value={cvcInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="tx-line ac">
                <Button type="submit">
                  <span>Сохранить</span>
                  {loading ? <span className="tx-loader"></span> : null}
                </Button>
              </div>
              <div className="tx-line">
                <span className="tx-error">{error}</span>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  card: state.user.card,
  error: state.user.errorProfile,
  loading: state.user.loadingProfile
});

const mapDispatchToProps = {
  loadProfileUser,
  updateProfileUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
