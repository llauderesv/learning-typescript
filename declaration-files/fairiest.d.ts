// Declaration files create what's known as an ambient context, meaning an
// area of code where you can only
// declare types, not values.
declare function canGrantWish(wish: string): boolean; // Ok

declare function grantWish(wish: string) {
  return true;
};

class Fairy {
  canGrantWish(wish: string): boolean;
}

declare const fullName: string;

const lastName = 'Lemon';
