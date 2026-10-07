import { Handle, Position } from '@xyflow/react';

function EmailNode() {
  return (
    <div className="workflow-node email-node">
      <Handle
        type="target"
        position={Position.Top}
        className="custom-handle"
      />

      <div className="node-header">
        <div className="node-icon email-icon">@</div>
        <div>
          <span className="node-type">NOTIFICATION</span>
          <h3>Send Email</h3>
        </div>
      </div>

      <p>Send an email notification</p>

      <div className="node-footer">
        <span>To</span>
        <strong>Employee</strong>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="custom-handle"
      />
    </div>
  );
}

export default EmailNode;