var RandomizedSet = function () {
  this.arr = {};
  this.mem = {};
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.arr[val]) {
    this.arr[val]++;
    return false;
  } else {
    this.arr[val] = 1;
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.arr[val]) {
    this.arr[val] = 0;
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  for (const key in this.arr) {
    if (!this.mem[key] && this.arr[key]) {
      this.mem[key] = 1;
      return key;
    }
  }
};

let val = 1;
var obj = new RandomizedSet();
var param_1 = obj.insert(val);
var param_2 = obj.remove(val);
var param_3 = obj.getRandom();
