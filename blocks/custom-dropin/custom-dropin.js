// Copy the contents only of the decorate function
export default function decorate(block) {
  // * Storing labels in constants for better readability
  const TITLE = block.querySelector('div:nth-child(1) p').innerText;
  const HELP_TEXT = block.querySelector('div:nth-child(2) p').innerText;
  const EMPTY_ROW = `<tr class="contacts-table__row">
                    <td class="contacts-table__cell" colspan="5">No address available</td>
                  </tr>`;

  // * Removing markup _clean slate_
  block.querySelector('div:nth-child(2)').remove();
  block.querySelector('div:nth-child(1)').remove();

  // * Header
  const element0 = document.createElement('header');
  element0.className = 'address-book__header';
  element0.innerHTML = `
  <h1 class="address-book__title">${TITLE}</h1>
  <button class="address-book__add-btn -js-open-modal">Add contact</button>`;
  block.appendChild(element0);

  // * Search bar
  const element2 = document.createElement('div');
  element2.className = 'search';
  element2.innerHTML = `<div class="search__input-wrapper">
        <input id="search-input" type="text" class="search__input">
          <button class="search__btn -js-search">
            <svg class="search__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8">
              </circle>
              <path d="m21 21-4.35-4.35">
              </path>
            </svg>
          </button>
          <span>${HELP_TEXT}</span>
        </div>`;
  block.appendChild(element2);

  // * Table
  const element3 = document.createElement('div');
  element3.className = 'table-container';
  element3.innerHTML = `
      <!-- Selection Bar -->
      <div class="selection-bar">
        <!-- Table -->
        <table class="contacts-table">
          <thead class="contacts-table__head">
            <tr class="contacts-table__row contacts-table__row--header">
              <th class="contacts-table__header">
              </th>
              <th class="contacts-table__header">Name</th>
              <th class="contacts-table__header">Business name</th>
              <th class="contacts-table__header">Address</th>
              <th class="contacts-table__header"></th>
            </tr>
          </thead>

          <tbody class="contacts-table__body">
            ${EMPTY_ROW}
          </tbody>
        </table>
      </div>`;
  block.appendChild(element3);

  const element4 = document.createElement('dialog');
  element4.className = 'modal';
  element4.innerHTML = `<div class="modal__content">
            <header class="modal__header">
              <h2 class="modal__title">Add contact</h2>
              <button class="modal__close-btn -js-close-modal" type="button">
                <svg class="modal__close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </header>

            <form class="modal__form">
              <!-- Contact Person and Organisation Section -->
              <section class="form-section">
                <h3 class="form-section__title">Contact person and organisation</h3>
                <p class="form-section__description">Provide full name of contact person and/or their organisation.</p>

                <div class="form-field">
                  <label class="form-field__label" for="contact-person">Contact person</label>
                  <input class="form-field__input" type="text" id="contact-person" name="contact-person">
                </div>

                <div class="form-field">
                  <label class="form-field__label" for="organisation">Organisation</label>
                  <input class="form-field__input" type="text" id="organisation" name="organisation">
                </div>

                <div class="form-field">
                  <label class="form-field__label" for="address">Address</label>
                  <input class="form-field__input form-field__input--wide" type="text" id="address" name="address">
                </div>
              </section>

              <hr class="form-divider">

              <!-- Communication Method Section -->
              <section class="form-section">
                <h3 class="form-section__title">Communication method</h3>
                <p class="form-section__description">Provide an email and/or phone number.</p>

                <div class="form-field">
                  <label class="form-field__label" for="email">Email</label>
                  <input class="form-field__input" type="email" id="email" name="email">
                </div>

                <div class="form-field">
                  <label class="form-field__label" for="phone">Phone number</label>
                  <input class="form-field__input" type="tel" id="phone" name="phone">
                </div>
              </section>

              <!-- Action Buttons -->
              <div class="modal__actions">
                <button class="modal__btn modal__btn--primary" type="submit">Save</button>
                <button class="modal__btn modal__btn--secondary -js-close-modal" type="button">Cancel</button>
              </div>
            </form>
        </div>`;
  document.querySelector('body').appendChild(element4);

  // * Eventlisteners
  block.querySelector('.-js-open-modal').addEventListener('click', () => {
    element4.showModal();
  });

  document.querySelector('.-js-close-modal').addEventListener('click', () => {
    element4.close();
  });

  // * Mark block as loaded after all optimizations
  block.setAttribute('data-block-status', 'loaded');
}
