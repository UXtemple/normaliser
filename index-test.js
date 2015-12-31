var test = require('tape');
var normalise = require('./index');

test('#normalise', function(t) {
  t.deepEquals(
    normalise([{
      id: '1',
      data: 'd1'
    }, {
      id: '2',
      data: 'd2'
    }]), {
      byId: {
        '1': {
          id: '1',
          data: 'd1'
        },
        '2': {
          id: '2',
          data: 'd2'
        }
      },
      items: ['1', '2']
    },
    'with default key id'
  );

  t.deepEquals(
    normalise([{
      id: '1',
      data: 'd1'
    }, {
      id: '2',
      data: 'd2'
    }], 'data'), {
      byId: {
        'd1': {
          id: '1',
          data: 'd1'
        },
        'd2': {
          id: '2',
          data: 'd2'
        }
      },
      items: ['d1', 'd2']
    },
    'with custom key'
  );

  t.end();
});
