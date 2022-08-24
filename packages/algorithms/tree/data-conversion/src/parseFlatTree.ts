export interface DataNode {
  value?: string | number;
  title?: any;
  label?: any;
  key?: string | number;
  children?: DataNode[];
  [prop: string]: any;
}

export interface Config {
  id?: string | number;
  pId?: string | number;
  rootPId?: string | number;
}

const parseFlatTree = (
  treeData: DataNode[],
  config: Config = {},
): DataNode[] => {
  const { id = 'id', pId = 'pId', rootPId = null } = config;

  const keyNodes: Record<string, DataNode> = {};
  const rootNodeList: DataNode[] = [];

  // Fill in the map
  const nodeList = treeData.map(node => {
    const clone = { ...node };
    const key = clone[id];
    keyNodes[key] = clone;
    clone.key = clone.key || key;
    return clone;
  });

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

  return rootNodeList;
};

export default parseFlatTree;
