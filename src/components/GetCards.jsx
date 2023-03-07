import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class GetCards extends Component {
  render() {
    const { cards } = this.props;
    const htmlCards = [];
    cards.forEach((card) => {
      const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
        cardImage, cardRare, cardTrunfo } = card;
      const htmlCard = (<Card
        key={ cardName }
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardImage={ cardImage }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
      />);
      htmlCards.push(htmlCard);
    });

    return (htmlCards);
  }
}

GetCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.number.isRequired,
      cardAttr2: PropTypes.number.isRequired,
      cardAttr3: PropTypes.number.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,

};

export default GetCards;
