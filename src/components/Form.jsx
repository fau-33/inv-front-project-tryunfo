import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <div>
          <label htmlFor="name-input">
            Nome
            <input
              name="cardName"
              type="text"
              id="name-input"
              data-testid="name-input"
              required
              placeholder="Nome da Carta"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description-input">
            Descrição
            <textarea
              name="cardDescription"
              id="description-input"
              data-testid="description-input"
              cols="30"
              rows="10"
              required
              placeholder="Descrição da Carta"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr1-input">
            Força
            <input
              type="number"
              name="cardAttr1"
              id="attr1-input"
              data-testid="attr1-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr2-input">
            Velocidade
            <input
              type="number"
              name="cardAttr2"
              id="attr2-input"
              data-testid="attr2-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr3-input">
            Observação
            <input
              type="number"
              name="cardAttr3"
              id="attr3-input"
              data-testid="attr3-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="imagem-input">
            Imagem
            <input
              type="text"
              name="cardImage"
              id="imagem-input"
              data-testid="image-input"
              required
              placeholder="Url da imagem"
            />
          </label>
        </div>
        <div>
          <label htmlFor="rare-input">
            Raridade
            <select
              name="cardRare"
              id="rare-input"
              data-testid="rare-input"
              required
            >
              <option label="normal" value="normal">normal</option>
              <option label="raro" value="raro">raro</option>
              <option label="muito raro" value="muito raro">muito raro</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="trunfo-input">
            Super Trunfo
            <input
              type="checkbox"
              id="trunfo-input"
              data-testid="trunfo-input"
              required
            />
          </label>
        </div>
        <div>
          <button
            type="button"
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
