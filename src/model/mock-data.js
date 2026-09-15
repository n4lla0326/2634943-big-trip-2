import Destination from './Destination.js';
import RoutePoint from './RoutePoint.js';

const LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.';

const getRandomLorem = () => {
  const sentences = LoremIpsum.split('. ').filter((s) => s.length > 0);
  const count = Math.floor(Math.random() * 5) + 1;
  const result = [];
  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * sentences.length);
    result.push(sentences[index]);
  }
  return `${result.join('. ')}.`;
};

const destinations = [
  { name: 'Amsterdam', description: getRandomLorem(), pictures: [`https://loremflickr.com/248/152?random=${Math.random()}`] },
  { name: 'Geneva', description: getRandomLorem(), pictures: [`https://loremflickr.com/248/152?random=${Math.random()}`] },
  { name: 'Chamonix', description: getRandomLorem(), pictures: [`https://loremflickr.com/248/152?random=${Math.random()}`] },
  { name: 'Paris', description: getRandomLorem(), pictures: [`https://loremflickr.com/248/152?random=${Math.random()}`] },
];

const offersData = {
  'taxi': [
    { type: 'taxi', name: 'Order Uber', price: 20 },
    { type: 'taxi', name: 'Premium', price: 80 },
  ],
  'bus': [
    { type: 'bus', name: 'Add luggage', price: 10 },
    { type: 'bus', name: 'Priority', price: 15 },
  ],
  'train': [
    { type: 'train', name: 'Add luggage', price: 25 },
    { type: 'train', name: 'Switch to comfort', price: 40 },
    { type: 'train', name: 'Add meal', price: 15 },
  ],
  'ship': [
    { type: 'ship', name: 'Add cabin', price: 100 },
    { type: 'ship', name: 'Meal included', price: 50 },
  ],
  'drive': [
    { type: 'drive', name: 'Add insurance', price: 30 },
    { type: 'drive', name: 'GPS navigation', price: 10 },
  ],
  'flight': [
    { type: 'flight', name: 'Add luggage', price: 50 },
    { type: 'flight', name: 'Switch to comfort', price: 80 },
    { type: 'flight', name: 'Add meal', price: 15 },
    { type: 'flight', name: 'Choose seats', price: 5 },
  ],
  'check-in': [
    { type: 'check-in', name: 'Add breakfast', price: 20 },
    { type: 'check-in', name: 'Spa access', price: 45 },
  ],
  'sightseeing': [
    { type: 'sightseeing', name: 'Guide service', price: 35 },
    { type: 'sightseeing', name: 'Photographer', price: 60 },
  ],
  'restaurant': [
    { type: 'restaurant', name: 'Reserve table', price: 0 },
    { type: 'restaurant', name: 'VIP room', price: 100 },
  ],
};

const generateRoutePoints = () => {
  const types = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
  const points = [];
  let id = 1;

  for (let i = 0; i < 3; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const destination = destinations[Math.floor(Math.random() * destinations.length)];
    const availableOffers = offersData[type] || [];
    const selectedOffers = availableOffers.filter(() => Math.random() > 0.5);
    const basePrice = Math.floor(Math.random() * 500) + 20;
    const startDate = new Date(2019, 2, 18 + i, 10 + i * 2, 0);
    const endDate = new Date(startDate.getTime() + (Math.floor(Math.random() * 3) + 1) * 60 * 60 * 1000);

    points.push(new RoutePoint({
      type,
      destination: new Destination(destination),
      offers: selectedOffers,
      dateFrom: startDate.toISOString(),
      dateTo: endDate.toISOString(),
      basePrice,
      isFavorite: Math.random() > 0.5,
      id: String(id++),
    }));
  }

  return points;
};

export { destinations, offersData, generateRoutePoints, getRandomLorem };
