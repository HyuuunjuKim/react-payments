import PropTypes from 'prop-types';
import { firestore } from '../../firebase';
import { Header } from '../../components/commons/header/Header';
import { Button } from '../../components/commons/button/Button';
import { Card, CARD_SIZE } from '../../components/commons/card/Card';
import Styled from './style';
import { PAGE } from '../../constants/page';
import { CreditCard } from '../../components/commons/card/CreditCard';
import { useContext } from 'react';
import { TargetCardIdContext } from '../../contexts/TargetCardIdContext';
import { CONFIRM_MESSAGE } from '../../constants/message';

const cardListRef = firestore.collection('cardList');

const updateButtonStyles = {
  border: '1px solid #04C09E',
  borderRadius: '6px',
  height: '36px',
  width: '46%',
  display: 'none',
  color: '#04C09E',
};

const deleteButtonStyles = {
  border: '1px solid #919191',
  borderRadius: '6px',
  height: '36px',
  width: '46%',
  display: 'none',
  color: '#919191',
};

const CardListPage = ({ setCurrentPage, cardList, setCardList }) => {
  const { actions } = useContext(TargetCardIdContext);

  const handleCardUpdate = id => {
    actions.setTargetCardId(id);
    setCurrentPage(PAGE.CARD_CREATION);
  };

  const handleCardDelete = async id => {
    if (!window.confirm(CONFIRM_MESSAGE.DELETE_CARD)) return;

    await cardListRef.doc(id).delete();

    setCardList(prevState => [...prevState.filter(state => state.id !== id)]);
  };

  return (
    <>
      <Header>보유카드</Header>

      <Styled.CardListContainer>
        {cardList.map(({ id, content }) => (
          <Styled.CardContainer key={id}>
            <CreditCard
              size={CARD_SIZE.MD}
              backgroundColor={content?.selectedCardInfo.color}
              content={{
                cardType: content?.selectedCardInfo.name,
                cardNumber: content?.cardNumber && Object.values(content.cardNumber),
                cardOwner: content?.cardOwner,
                cardExpiredDate: content?.cardExpiredDate,
              }}
            />

            <Styled.NickName>{content.cardNickName}</Styled.NickName>

            <Styled.ButtonContainer>
              <Button className="update-card" styles={updateButtonStyles} onClick={() => handleCardUpdate(id)}>
                수정하기
              </Button>
              <Button className="delete-card" styles={deleteButtonStyles} onClick={() => handleCardDelete(id)}>
                삭제하기
              </Button>
            </Styled.ButtonContainer>
          </Styled.CardContainer>
        ))}
      </Styled.CardListContainer>

      <Styled.AddButtonContainer>
        <Button onClick={() => setCurrentPage(PAGE.CARD_CREATION)}>
          <Card style={{ boxShadow: 'none' }}>+</Card>
        </Button>
      </Styled.AddButtonContainer>
    </>
  );
};

CardListPage.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  setCardList: PropTypes.func.isRequired,
};

export default CardListPage;
