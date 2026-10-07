import { Handle, Position } from '@xyflow/react';

function ApprovalNode({ data }) {
  return (
    <div className="workflow-node approval-node">
      <Handle
        type="target"
        position={Position.Top}
        className="custom-handle"
      />

      <div className="node-header">
        <div className="node-icon approval-icon">✓</div>

        <div>
          <span className="node-type">APPROVAL</span>
          <h3>{data.label}</h3>
        </div>
      </div>

      <p>Manager reviews the request</p>

      <div className="node-footer">
        <span>Approver</span>
        <strong>Manager</strong>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="custom-handle"
      />
    </div>
  );
}

export default ApprovalNode;