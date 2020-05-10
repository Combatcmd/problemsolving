import mergeLinkedLists from './mergeLinkedLists.js';

test('21.mergeLinkedLists', () => {
  const list1 = {
    val: 1,
    next: {
      val: 2,
      next: null,
    },
  };
  const list2 = {
    val: -1,
    next: {
      val: 3,
      next: null,
    },
  };
  const list3 = {
    val: -1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    },
  };
  expect(mergeLinkedLists(list1, list2)).toEqual(list3);
});
