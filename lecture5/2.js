const data = [
  { text: 'First', type: 'static' },
  { text: 1, type: 'static' },
  { text: Math.PI, type: 'static' },
  { type: 'dynamic', text: () => 'Dynamic text#3' },
  { text: 'Second', type: 'static' },
  { text: [], type: 'static' },
  { text: 'Third', type: 'static' },
  { type: 'dynamic', text: () => 'Dynamic text#2' },
  { text: 'Last', type: 'static' },
  { text: { text: 9 }, type: 'static' },
  { type: 'dynamic', text: () => 'Dynamic text#1' },
];

let items = [];

// ================== Your code below ==================
// Note: Вы можете обращаться к элементу массива по индексу, например items[2] -> { text: Math.PI },
// Напишите код, который переложит из data в items только те элементы у которых type === dynamic
// Вам понадобятся циклы, условия, switch и немного знаний о том, как обращаться к свойствам объекта и вызывать функции




// ================== End of your code ==================

renderList(items);
