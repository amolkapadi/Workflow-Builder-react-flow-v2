import { Handle, Position } from '@xyflow/react';

function EndNode({ data }) {
  return (
    <div className="workflow-node end-node">
      <Handle
        type="target"
        position={Position.Top}
        className="custom-handle"
      />
      <div className="node-header">
        <div className="node-icon end-icon">✓</div>
        <div>
          <span className="node-type">COMPLETE</span>
          <h3>{data.label}</h3>
        </div>
      </div>
      <p>Leave request approved</p>
    </div>
  );
}

export default EndNode;