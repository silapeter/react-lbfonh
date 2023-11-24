import React, { useState, useEffect } from 'react';
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function UnstyledDemo() {
  const [nodes, setNodes] = useState(null);
  const [selectedNodeKey, setSelectedNodeKey] = useState(null);

  useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []);

  return (
    <div className="card flex justify-center">
      <TreeSelect
        value={selectedNodeKey}
        onChange={(e) => setSelectedNodeKey(e.value)}
        options={nodes}
        className="md:w-20rem w-full"
        placeholder="Select Item"
      ></TreeSelect>
    </div>
  );
}
