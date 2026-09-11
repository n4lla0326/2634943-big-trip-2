export default class CreateForm {
  get template() {
    return `
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type event__type-btn" for="event-type-toggle">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/taxi.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle visually-hidden" id="event-type-toggle" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                <div class="event__type-item">
                  <input id="event-type-taxi" class="event__type-input visually-hidden" type="radio" name="event-type" value="taxi" checked>
                  <label class="event__type-label event__type-label--taxi" for="event-type-taxi">Taxi</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-bus" class="event__type-input visually-hidden" type="radio" name="event-type" value="bus">
                  <label class="event__type-label event__type-label--bus" for="event-type-bus">Bus</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-train" class="event__type-input visually-hidden" type="radio" name="event-type" value="train">
                  <label class="event__type-label event__type-label--train" for="event-type-train">Train</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-ship" class="event__type-input visually-hidden" type="radio" name="event-type" value="ship">
                  <label class="event__type-label event__type-label--ship" for="event-type-ship">Ship</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-drive" class="event__type-input visually-hidden" type="radio" name="event-type" value="drive">
                  <label class="event__type-label event__type-label--drive" for="event-type-drive">Drive</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-flight" class="event__type-input visually-hidden" type="radio" name="event-type" value="flight">
                  <label class="event__type-label event__type-label--flight" for="event-type-flight">Flight</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-check-in" class="event__type-input visually-hidden" type="radio" name="event-type" value="check-in">
                  <label class="event__type-label event__type-label--check-in" for="event-type-check-in">Check-in</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-sightseeing" class="event__type-input visually-hidden" type="radio" name="event-type" value="sightseeing">
                  <label class="event__type-label event__type-label--sightseeing" for="event-type-sightseeing">Sightseeing</label>
                </div>
                <div class="event__type-item">
                  <input id="event-type-restaurant" class="event__type-input visually-hidden" type="radio" name="event-type" value="restaurant">
                  <label class="event__type-label event__type-label--restaurant" for="event-type-restaurant">Restaurant</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div class="event__field-group event__field-group--destination">
            <label class="event__label event__type-output" for="event-destination">
              Taxi
            </label>
            <input class="event__input event__input--destination" id="event-destination" type="text" name="event-destination" value="" list="destination-list" placeholder="Choose destination">
            <datalist id="destination-list">
              <option value="Amsterdam"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
            </datalist>
          </div>

          <div class="event__field-group event__field-group--time">
            <label class="visually-hidden" for="event-start-time">From</label>
            <input class="event__input event__input--time" id="event-start-time" type="text" name="event-start-time" placeholder="18/03/19 12:25">
            &mdash;
            <label class="visually-hidden" for="event-end-time">To</label>
            <input class="event__input event__input--time" id="event-end-time" type="text" name="event-end-time" placeholder="18/03/19 13:35">
          </div>

          <div class="event__field-group event__field-group--price">
            <label class="event__label" for="event-price">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input event__input--price" id="event-price" type="text" name="event-price" placeholder="160">
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
