import { Record } from 'immutable'

const imageRecord = Record({
  data: '',
});

export default class ImageData extends imageRecord {
  getData() {
    return this.get('data') || 'New Image';
  }
}
