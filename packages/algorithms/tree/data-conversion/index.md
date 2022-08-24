# 结构转换

## 扁平化数组转树

有以下的扁平数组需将其转换成树

```ts
const treeData = [
  { id: 1, pId: null, value: '1', title: '1' },
  { id: 2, pId: 1, value: '1-0', title: '1-0' },
  { id: 3, pId: 2, value: '1-0-1', title: '1-0-1' },
  { id: 4, pId: 2, value: '1-0-2', title: '1-0-2' },
  { id: 5, pId: 1, value: '1-1', title: '1-1' },
];
```

为方便对节点查找， 以唯一键（id） 为键节点为值，将以上数组转为的字典对象

```ts
const keyNodes: Record<string, DataNode> = {};

const nodeList = treeData.map(node => {
  const clone = { ...node };
  const key = clone[id];
  keyNodes[key] = clone;

  return clone;
});
```

可得到以下字典对象

```ts
const keyNodes = {
  1: { id: 1, pId: null, value: '1', title: '1' },
  2: { id: 2, pId: 1, value: '1-0', title: '1-0' },
  3: { id: 3, pId: 2, value: '1-0-1', title: '1-0-1' },
  4: { id: 4, pId: 2, value: '1-0-2', title: '1-0-2' },
  5: { id: 5, pId: 1, value: '1-1', title: '1-1' },
};
```

遍历所有的节点，如果节点有父节点则将节点放入父节点的 `children` 数组中，如果节点的没有父节点则将节点放入跟节点数组中，返回最终的根节点数组

```ts
const rootNodeList: DataNode[] = [];

// Connect tree
nodeList.forEach(node => {
  const parentKey = node[pId];
  const parent = keyNodes[parentKey];

  // Fill parent
  if (parent) {
    parent.children = parent.children || [];
    parent.children.push(node);
  }

  // Fill root tree node
  if (parentKey === rootPId || (!parent && rootPId === null)) {
    rootNodeList.push(node);
  }
});
```
