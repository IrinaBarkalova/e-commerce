import ApiStore from '@store/ApiStore';

export default class RootStore {
  readonly apiStore = new ApiStore('https://api.escuelajs.co/api/v1/');
}
