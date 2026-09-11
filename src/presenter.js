import { render, RenderPosition } from './render.js';
import Filter from './view/Filter.js';
import Sort from './view/Sort.js';
import CreateForm from './view/CreateForm.js';
import EditForm from './view/EditForm.js';
import RoutePoint from './view/RoutePoint.js';
export default class Presenter {
  render() {
    document.addEventListener('DOMContentLoaded', () => {
      render(new Filter(), document.querySelector('.trip-controls__filters'));
      render(new CreateForm(), document.querySelector('.trip-events'));
      render(new Sort(), document.querySelector('.trip-events'));
      render(new EditForm(), document.querySelector('.trip-events'), RenderPosition.AFTERBEGIN);
      for (let i = 0; i < 3; i++) {
        render(new RoutePoint(), document.querySelector('.trip-events'));
      }
    });
  }
}
