# normaliser

normalise an array to an object with byId and items

```js
import normalise from 'normaliser';

const list = [{
  id: '1',
  data: 1
}, {
  id: '2',
  data: 2
}];

normalise(list)
// => {
//   byId: {
//     '1': {
//       id: '1',
//       data: 1
//     }, {
//     '2': {
//       id: '2',
//       data: 2
//     }
//   },
//   items: ['1', '2']
// }
```

MIT license. By UXtemple.
