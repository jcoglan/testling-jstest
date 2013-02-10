Widget = function(name) {
  this._name = name;
};

Widget.prototype.getName = function() {
  return this._name.toUpperCase();
};

