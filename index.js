module.exports = function normalise(list, key) {
  var idKey = key || 'id';

  var byId = {};

  var items = list.map(function(item) {
    const id = item[idKey];
    byId[id] = item;
    return id;
  });

  return {
    byId: byId,
    items: items
  };
}
