import { describe, test } from 'vitest';

describe('treeDataConversion', () => {
  test('should parseSimpleTreeData', () => {});

  test('should flatten tree data', () => {
    const treeData = [
      {
        title: 'parent 1',
        value: 'parent 1',
        children: [
          {
            title: 'parent 1-0',
            value: 'parent 1-0',
            children: [
              {
                title: 'my leaf',
                value: 'leaf1',
              },
              {
                title: 'your leaf',
                value: 'leaf2',
              },
            ],
          },
          {
            title: 'parent 1-1',
            value: 'parent 1-1',
          },
        ],
      },
    ];
  });
});
