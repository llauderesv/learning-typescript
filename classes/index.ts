class Greeter {
  greet(name: string) {
    console.log(`${name}, do your stuff!`);
  }
}

new Greeter().greet('Miss Frizzle'); // Ok

class Greeted {
  constructor(message: string) {
    console.log(`As I always say: ${message}!`);
  }
}

new Greeted('take chances, make mistakes, get messy');

// new Greeted(); // Error: Expected 1 arguments, but got 0.

class ActivitiesQueues {
  pending!: string[];

  constructor(pending: string[]) {
    this.pending = pending;
  }

  next() {
    return this.pending.pop();
  }
}

const activities = new ActivitiesQueues(['eat', 'sleep', 'learn']);
console.log(activities.next());
