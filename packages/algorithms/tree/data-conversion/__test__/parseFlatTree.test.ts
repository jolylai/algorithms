import { describe, expect, test } from 'vitest';
import parseFlatTree from '../src/parseFlatTree';

describe('parseFlatTree', () => {
  test('should parseFlatTree', () => {
    const simpleTreeData = [
      { id: 1, pId: null, value: '1', title: '1' },
      { id: 2, pId: 1, value: '1-0', title: '1-0' },
      { id: 3, pId: 2, value: '1-0-1', title: '1-0-1' },
      { id: 4, pId: 2, value: '1-0-2', title: '1-0-2' },
      { id: 5, pId: 1, value: '1-1', title: '1-1' },
    ];

    expect(parseFlatTree(simpleTreeData)).toEqual([
      {
        id: 1,
        key: 1,
        pId: null,
        value: '1',
        title: '1',
        children: [
          {
            id: 2,
            key: 2,
            pId: 1,
            value: '1-0',
            title: '1-0',
            children: [
              { id: 3, key: 3, pId: 2, value: '1-0-1', title: '1-0-1' },
              { id: 4, key: 4, pId: 2, value: '1-0-2', title: '1-0-2' },
            ],
          },
          { id: 5, key: 5, pId: 1, value: '1-1', title: '1-1' },
        ],
      },
    ]);
  });
});
