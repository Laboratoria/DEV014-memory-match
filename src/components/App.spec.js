import App from './App.js';
import data from './../data/data.js'
describe('App', () => {
  it('should render without crashing', () => {
    const items = data.items;
    const el = App(items);
    expect(el instanceof HTMLElement).toBe(true);
  });
});
