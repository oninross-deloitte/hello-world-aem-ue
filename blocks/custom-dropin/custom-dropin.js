// Copy the contents only of the decorate function
export default function decorate(block) {
  // * Storing labels in constants for better readability
  const TITLE = block.querySelector("div:nth-child(1) p").innerText;
  const HELP_TEXT = block.querySelector("div:nth-child(2) p").innerText;
  const EMPTY_ROW = `<tr class="contacts-table__row">
                    <td class="contacts-table__cell" colspan="5">No address available</td>
                  </tr>`;

  // * Removing markup _clean slate_
  block.querySelector("div:nth-child(2)").remove();
  block.querySelector("div:nth-child(1)").remove();

  // * Header
  const element0 = document.createElement("header");
  element0.className = "address-book__header";
  element0.innerHTML = `
    <h1 class="address-book__title">${TITLE}</h1>
    <button class="address-book__add-btn">Add contact</button>`;
  block.appendChild(element0);

  // * Search bar
  const element2 = document.createElement("div");
  element2.className = "search";
  element2.innerHTML = `<div class="search__input-wrapper">
        <input id="search-input" type="text" class="search__input">
          <button class="search__btn">
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
  const element3 = document.createElement("div");
  element3.className = "table-container";
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

  // * Mark block as loaded after all optimizations
  block.setAttribute("data-block-status", "loaded");
}
