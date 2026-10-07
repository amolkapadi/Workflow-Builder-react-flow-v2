import { Handle, Position } from '@xyflow/react';

function ConditionNode({ data }) {
  return (
    <div className="workflow-node condition-node">
      <Handle
        type="target"
        position={Position.Top}
        className="custom-handle"
      />
      <div className="node-header">
        <div className="node-icon condition-icon">?</div>
        <div>
          <span className="node-type">CONDITION</span>
          <h3>{data.label}</h3>
        </div>
      </div>
      <p>Check a condition and choose a path</p>
      <div className="condition-options">
        <span>Yes</span>
        <span>No</span>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="condition-output"
        className="custom-handle"
      />
    </div>
  );
}

export default ConditionNode;