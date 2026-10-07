import { Handle, Position } from '@xyflow/react';

function ActionNode({ data }) {
  return (
    <div className="workflow-node action-node">
      <Handle
        type="target"
        position={Position.Top}
        className="custom-handle"
      />
      <div className="node-header">
        <div className="node-icon action-icon">⚡</div>
        <div>
          <span className="node-type">ACTION</span>
          <h3>{data.label}</h3>
        </div>
      </div>
      <p>Perform an automated action</p>
      <div className="node-footer">
        <span>Action</span>
        <strong>Update Status</strong>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="custom-handle"
      />
    </div>
  );
}

export default ActionNode;