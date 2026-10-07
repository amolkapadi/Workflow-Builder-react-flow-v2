function Toolbar({ workflowName, setWorkflowName }) {
  return (
    <header className="toolbar">
      <div className="brand">
        <div className="brand-logo">F</div>
        <div>
          <h1>FlowForge</h1>
          <span>Workflow Builder</span>
        </div>
      </div>
      <div className="workflow-title">
        <input
          type="text"
          value={workflowName}
          onChange={(event) => setWorkflowName(event.target.value)}
        />
        <span className="saved-status">
          <span className="status-dot"></span>
          Saved locally
        </span>
      </div>
      <div className="toolbar-actions">
        <button className="toolbar-button secondary-button">
          Save
        </button>
        <button className="toolbar-button primary-button">
          ▶ Run
        </button>
      </div>
    </header>
  );
}

export default Toolbar;