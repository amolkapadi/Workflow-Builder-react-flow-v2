import { Handle, Position } from '@xyflow/react';

function StartNode({ data }) {
  return (
    <div className="workflow-node start-node">
      <div className="node-header">
        <div className="node-icon start-icon">▶</div>
        <div>
          <span className="node-type">TRIGGER</span>
          <h3>{data.label}</h3>
        </div>
      </div>
      <p>Workflow started</p>
      <Handle
        type="source"
        position={Position.Bottom}
        className="custom-handle"
      />
    </div>
  );
}

export default StartNode;