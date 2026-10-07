import { useCallback, useState } from 'react';
import {
  ReactFlowProvider,
  useNodesState,
  useEdgesState
} from '@xyflow/react';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import WorkflowCanvas from './components/WorkflowCanvas';
import PropertiesPanel from './components/PropertiesPanel';
import Toast from './components/Toast';
import { initialNodes, initialEdges } from './data/initialWorkflow';
import './App.css';

function App() {
  const [workflowName, setWorkflowName] = useState('Employee Leave Approval');
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [toast, setToast] = useState(null);

  const selectedNode =
    nodes.find((node) => node.id === selectedNodeId) || null;

  const showToast = useCallback((message) => {
    setToast(message);

    setTimeout(() => {
      setToast(null);
    }, 3000);
  }, []);

  const updateNode = useCallback(
    (nodeId, updatedData) => {
      setNodes((currentNodes) =>
        currentNodes.map((node) =>
          node.id === nodeId
            ? {
                ...node,
                data: {
                  ...node.data,
                  ...updatedData
                }
              }
            : node
        )
      );

      return true;
    },
    [setNodes]
  );

  const deleteNode = useCallback(
    (nodeId) => {
      setNodes((currentNodes) =>
        currentNodes.filter((node) => node.id !== nodeId)
      );

      setEdges((currentEdges) =>
        currentEdges.filter(
          (edge) => edge.source !== nodeId && edge.target !== nodeId
        )
      );

      setSelectedNodeId(null);
      showToast('Node deleted successfully.');
    },
    [setNodes, setEdges, showToast]
  );

  return (
    <ReactFlowProvider>
      <div className="app">
        <Toolbar
          workflowName={workflowName}
          setWorkflowName={setWorkflowName}
        />

        <div className="workspace">
          <Sidebar />

          <WorkflowCanvas
            nodes={nodes}
            setNodes={setNodes}
            onNodesChange={onNodesChange}
            edges={edges}
            setEdges={setEdges}
            onEdgesChange={onEdgesChange}
            setSelectedNodeId={setSelectedNodeId}
          />

          <PropertiesPanel
            selectedNode={selectedNode}
            setSelectedNodeId={setSelectedNodeId}
            updateNode={updateNode}
            deleteNode={deleteNode}
            showToast={showToast}
          />
        </div>

        {toast && (
          <Toast
            message={toast}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </ReactFlowProvider>
  );
}

export default App;