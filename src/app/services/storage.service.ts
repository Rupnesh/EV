import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // JSON "set" example
  async setObject(key, data) {
    await Storage.set({
      key: key,
      value: JSON.stringify(data)
    });
  }

  // JSON "get" example
  async getObject(key) {
    const ret = await Storage.get({ key: key });
    return JSON.parse(ret.value);
  }

  async setItem(key, value) {
    await Storage.set({
      key: key,
      value: value
    });
  }

  async getItem1(key: string) {
    const { value } = await Storage.get({ key: key });
    return JSON.parse(value);
  }

  async getItem(key: string): Promise<any> {
    const item = await Storage.get({ key: key.toString() });
    return item.value;
  }

  async removeItem() {
    await Storage.remove({ key: 'LOGIN_STATUS' });
  }

  async keys() {
    const { keys } = await Storage.keys();
    console.log('Got keys: ', keys);
  }

  async clear() {
    await Storage.clear();
  }

}
