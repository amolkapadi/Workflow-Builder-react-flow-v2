function Sidebar() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const nodes = [
    {
      type: 'start',
      title: 'Start',
      description: 'Workflow trigger',
      icon: '▶',
      iconClass: 'start-icon'
    },
    {
      type: 'approval',
      title: 'Approval',
      description: 'Approval step',
      icon: '✓',
      iconClass: 'approval-icon'
    },
    {
      type: 'condition',
      title: 'Condition',
      description: 'Decision step',
      icon: '?',
      iconClass: 'condition-icon'
    },
    {
      type: 'action',
      title: 'Action',
      description: 'Perform an action',
      icon: '⚡',
      iconClass: 'action-icon'
    },
    {
      type: 'email',
      title: 'Email',
      description: 'Send notification',
      icon: '@',
      iconClass: 'email-icon'
    },
    {
      type: 'end',
      title: 'End',
      description: 'Workflow complete',
      icon: '✓',
      iconClass: 'end-icon'
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Nodes</h2>
        <p>Drag nodes to build your workflow</p>
      </div>

      <div className="node-list">
        {nodes.map((node) => (
          <div
            key={node.type}
            className="sidebar-node"
            draggable
            onDragStart={(event) => onDragStart(event, node.type)}
          >
            <div className={`sidebar-node-icon ${node.iconClass}`}>
              {node.icon}
            </div>
            <div>
              <strong>{node.title}</strong>
              <span>{node.description}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-help">
        <div className="help-icon">i</div>
        <div>
          <strong>Quick tip</strong>
          <p>
            Drag a node from here and drop it anywhere on the canvas.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;