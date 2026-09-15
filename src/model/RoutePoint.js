import Offer from './Offer.js';
import Destination from './Destination.js';

export default class RoutePoint {
  constructor(options) {
    this.type = options.type;
    this.destination = options.destination instanceof Destination
      ? options.destination
      : new Destination(options.destination);
    this.offers = options.offers.map((offer) => offer instanceof Offer
      ? offer
      : new Offer(offer));
    this.dateFrom = options.dateFrom;
    this.dateTo = options.dateTo;
    this.basePrice = options.basePrice;
    this.isFavorite = options.isFavorite;
    this.id = options.id;
  }
}
