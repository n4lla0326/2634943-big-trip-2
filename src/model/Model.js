import { generateRoutePoints } from './mock-data.js';

export default class Model {
  constructor() {
    this.points = generateRoutePoints();
  }

  getPoints() {
    return this.points;
  }
}
