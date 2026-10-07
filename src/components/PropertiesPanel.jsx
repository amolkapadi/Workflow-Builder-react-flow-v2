import { useEffect, useState } from 'react';

function PropertiesPanel({
  selectedNode,
  setSelectedNodeId,
  updateNode,
  deleteNode,
  showToast
}) {
  const [nodeName, setNodeName] = useState('');

  useEffect(() => {
    if (selectedNode) {
      setNodeName(selectedNode.data?.label || '');
    }
  }, [selectedNode]);

  if (!selectedNode) {
    return (
      <aside className="properties-panel empty-properties">
        <div className="properties-empty-content">
          <div className="properties-empty-icon">⌘</div>
          <h3>No node selected</h3>
          <p>
            Select a node on the canvas to view and edit its properties.
          </p>
        </div>
      </aside>
    );
  }

  const nodeType = selectedNode.type || 'node';

  const handleUpdate = () => {
    const trimmedName = nodeName.trim();

    if (!trimmedName) {
      showToast('Please enter a node name.');
      return;
    }

    updateNode(selectedNode.id, {
      label: trimmedName
    });

    showToast('Node updated successfully.');
  };

  return (
    <aside className="properties-panel">
      <div className="properties-header">
        <div>
          <span>NODE PROPERTIES</span>
          <h2>{nodeType}</h2>
        </div>

        <button
          className="close-properties"
          onClick={() => setSelectedNodeId(null)}
        >
          ×
        </button>
      </div>

      <div className="properties-body">
        <div className="property-group">
          <label htmlFor="node-name">Node Name</label>

          <input
            id="node-name"
            type="text"
            value={nodeName}
            onChange={(event) => setNodeName(event.target.value)}
          />
        </div>

        <div className="property-group">
          <label>Node Type</label>

          <div className="readonly-field">
            {nodeType}
          </div>
        </div>

        <div className="property-group">
          <label>Node ID</label>

          <div className="readonly-field">
            {selectedNode.id}
          </div>
        </div>

        <button
          className="update-node-button"
          onClick={handleUpdate}
        >
          Update Node
        </button>

      <button
  className="remove-node-button"
  onClick={() => deleteNode(selectedNode.id)}
>
  Delete Node
</button>
      </div>
    </aside>
  );
}

export default PropertiesPanel;