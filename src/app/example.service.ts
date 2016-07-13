import { Injectable } from '@angular/core';
// this is our example service!

@Injectable()
export class ExampleService {
  // let's make this service provide some data
  list: any[];

  constructor() {
    this.list = [];
  }
  addToList() {
    // this will provide a random integer on click
    this.list.push(Math.round(Math.random()*100));
  }

  addDudes() {
    let dudes = ["Bill", "Bob", "Ben"];
    // to use a for you need to use the following format
    for (let dude of dudes) {
      // the `of` statement is how we do things in TS [NOT IN]
      this.list.push(dude);
    }
  }

  getList() {
    return this.list;
  }
}
