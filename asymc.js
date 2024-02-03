let stocks = {
  fruits: ["apple", "mango", "banana"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["chocalates", "peanut"],
};
let is_shop_open = true;
let order = () => {
  return new promise((resolve, reject) => {
    if (is_shop_open) {
      resolve();
    } else {
      reject();
    }
  });
};
