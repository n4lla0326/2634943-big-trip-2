import { render, RenderPosition } from './render.js';
import Filter from './view/Filter.js';
import Sort from './view/Sort.js';
import CreateForm from './view/CreateForm.js';
import EditForm from './view/EditForm.js';
import RoutePoint from './view/RoutePoint.js';
import Model from './model/Model.js';
import { offersData } from './model/mock-data.js';

export default class Presenter {
  constructor() {
    this.model = new Model();
  }

  render() {
    document.addEventListener('DOMContentLoaded', () => {
      render(new Filter(), document.querySelector('.trip-controls__filters'));
      render(new CreateForm({
        type: 'flight',
        destination: null,
        dateFrom: null,
        dateTo: null,
        basePrice: 0,
        id: 'new',
      }), document.querySelector('.trip-events'));

      render(new Sort(), document.querySelector('.trip-events'));

      const points = this.model.getPoints();
      if (points.length > 0) {
        const firstPoint = points[0];
        const allOffers = offersData[firstPoint.type] || [];
        const selectedOffers = firstPoint.offers || [];
        render(new EditForm({
          type: firstPoint.type,
          destination: firstPoint.destination,
          dateFrom: firstPoint.dateFrom,
          dateTo: firstPoint.dateTo,
          basePrice: firstPoint.basePrice,
          offers: allOffers,
          selectedOffers,
          id: firstPoint.id,
        }), document.querySelector('.trip-events'), RenderPosition.AFTERBEGIN);
      }

      points.forEach((point) => {
        render(new RoutePoint(point), document.querySelector('.trip-events'));
      });
    });
  }
}
