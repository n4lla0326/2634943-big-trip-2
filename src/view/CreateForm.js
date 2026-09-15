export default class CreateForm {
  constructor(options) {
    this.type = options.type;
    this.destination = options.destination;
    this.dateFrom = options.dateFrom;
    this.dateTo = options.dateTo;
    this.basePrice = options.basePrice;
    this.id = options.id || 'new';
  }

  get template() {
    const dateFrom = this.dateFrom ? new Date(this.dateFrom) : new Date();
    const dateTo = this.dateTo ? new Date(this.dateTo) : new Date(Date.now() + 60 * 60 * 1000);
    const startDay = String(dateFrom.getDate()).padStart(2, '0');
    const startMonth = String(dateFrom.getMonth() + 1).padStart(2, '0');
    const startYear = String(dateFrom.getFullYear()).slice(2);
    const startHours = String(dateFrom.getHours()).padStart(2, '0');
    const startMinutes = String(dateFrom.getMinutes()).padStart(2, '0');
    const endDay = String(dateTo.getDate()).padStart(2, '0');
    const endMonth = String(dateTo.getMonth() + 1).padStart(2, '0');
    const endYear = String(dateTo.getFullYear()).slice(2);
    const endHours = String(dateTo.getHours()).padStart(2, '0');
    const endMinutes = String(dateTo.getMinutes()).padStart(2, '0');

    const startDateTime = `${startDay}/${startMonth}/${startYear} ${startHours}:${startMinutes}`;
    const endDateTime = `${endDay}/${endMonth}/${endYear} ${endHours}:${endMinutes}`;

    const iconMap = {
      'taxi': 'img/icons/taxi.png',
      'bus': 'img/icons/bus.png',
      'train': 'img/icons/train.png',
      'ship': 'img/icons/ship.png',
      'drive': 'img/icons/drive.png',
      'flight': 'img/icons/flight.png',
      'check-in': 'img/icons/check-in.png',
      'sightseeing': 'img/icons/sightseeing.png',
      'restaurant': 'img/icons/restaurant.png',
    };
    const iconSrc = iconMap[this.type] || 'img/icons/flight.png';

    const typeLabelMap = {
      'taxi': 'Taxi',
      'bus': 'Bus',
      'train': 'Train',
      'ship': 'Ship',
      'drive': 'Drive',
      'flight': 'Flight',
      'check-in': 'Check-in',
      'sightseeing': 'Sightseeing',
      'restaurant': 'Restaurant',
    };
    const typeLabel = typeLabelMap[this.type] || 'Flight';

    return `
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type event__type-btn" for="event-type-toggle-${this.id}">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="${iconSrc}" alt="Event type icon">
            </label>
            <input class="event__type-toggle visually-hidden" id="event-type-toggle-${this.id}" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                <div class="event__type-item">
                  <input id="event-type-taxi-${this.id}" class="event__type-input visually-hidden" type="radio" name="event-type" value="taxi" ${this.type === 'taxi' ? 'checked' : ''}>
                  <label class="event__type-label event__type-label--taxi" for="event-type-taxi-${this.id}">Taxi</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-bus-${this.id}" class="event__type-input visually-hidden" type="radio" name="event-type" value="bus" ${this.type === 'bus' ? 'checked' : ''}>
                  <label class="event__type-label event__type-label--bus" for="event-type-bus-${this.id}">Bus</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-train-${this.id}" class="event__type-input visually-hidden" type="radio" name="event-type" value="train" ${this.type === 'train' ? 'checked' : ''}>
                  <label class="event__type-label event__type-label--train" for="event-type-train-${this.id}">Train</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-ship-${this.id}" class="event__type-input visually-hidden" type="radio" name="event-type" value="ship" ${this.type === 'ship' ? 'checked' : ''}>
                  <label class="event__type-label event__type-label--ship" for="event-type-ship-${this.id}">Ship</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-drive-${this.id}" class="event__type-input visually-hidden" type="radio" name="event-type" value="drive" ${this.type === 'drive' ? 'checked' : ''}>
                  <label class="event__type-label event__type-label--drive" for="event-type-drive-${this.id}">Drive</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-flight-${this.id}" class="event__type-input visually-hidden" type="radio" name="event-type" value="flight" ${this.type === 'flight' ? 'checked' : ''}>
                  <label class="event__type-label event__type-label--flight" for="event-type-flight-${this.id}">Flight</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-check-in-${this.id}" class="event__type-input visually-hidden" type="radio" name="event-type" value="check-in" ${this.type === 'check-in' ? 'checked' : ''}>
                  <label class="event__type-label event__type-label--check-in" for="event-type-check-in-${this.id}">Check-in</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-sightseeing-${this.id}" class="event__type-input visually-hidden" type="radio" name="event-type" value="sightseeing" ${this.type === 'sightseeing' ? 'checked' : ''}>
                  <label class="event__type-label event__type-label--sightseeing" for="event-type-sightseeing-${this.id}">Sightseeing</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-restaurant-${this.id}" class="event__type-input visually-hidden" type="radio" name="event-type" value="restaurant" ${this.type === 'restaurant' ? 'checked' : ''}>
                  <label class="event__type-label event__type-label--restaurant" for="event-type-restaurant-${this.id}">Restaurant</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div class="event__field-group event__field-group--destination">
            <label class="event__label event__type-output" for="event-destination-${this.id}">
              ${typeLabel}
            </label>
            <input class="event__input event__input--destination" id="event-destination-${this.id}" type="text" name="event-destination" value="${this.destination ? this.destination.name : ''}" list="destination-list-${this.id}" placeholder="Choose destination">
            <datalist id="destination-list-${this.id}">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
              <option value="Paris"></option>
            </datalist>
          </div>

          <div class="event__field-group event__field-group--time">
            <label class="visually-hidden" for="event-start-time-${this.id}">From</label>
            <input class="event__input event__input--time" id="event-start-time-${this.id}" type="text" name="event-start-time" value="${startDateTime}" placeholder="18/03/19 12:25">
            &mdash;
            <label class="visually-hidden" for="event-end-time-${this.id}">To</label>
            <input class="event__input event__input--time" id="event-end-time-${this.id}" type="text" name="event-end-time" value="${endDateTime}" placeholder="18/03/19 13:35">
          </div>

          <div class="event__field-group event__field-group--price">
            <label class="event__label" for="event-price-${this.id}">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input event__input--price" id="event-price-${this.id}" type="text" name="event-price" value="${this.basePrice || 0}" placeholder="160">
          </div>

          <button class="event__save-btn btn btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
      </form>`;
  }

  getElement() {
    const container = document.createElement('div');
    container.innerHTML = this.template;
    return container.firstElementChild;
  }
}
