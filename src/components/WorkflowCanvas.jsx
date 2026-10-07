import { useCallback, useMemo, useRef } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useReactFlow
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import StartNode from './nodes/StartNode';
import ApprovalNode from './nodes/ApprovalNode';
import ConditionNode from './nodes/ConditionNode';
import ActionNode from './nodes/ActionNode';
import EmailNode from './nodes/EmailNode';
import EndNode from './nodes/EndNode';

function WorkflowCanvas({
  nodes,
  setNodes,
  onNodesChange,
  edges,
  setEdges,
  onEdgesChange,
  setSelectedNodeId
}) {
  const reactFlowWrapper = useRef(null);
  const { screenToFlowPosition } = useReactFlow();

  const nodeTypes = useMemo(
    () => ({
      start: StartNode,
      approval: ApprovalNode,
      condition: ConditionNode,
      action: ActionNode,
      email: EmailNode,
      end: EndNode
    }),
    []
  );

  const onConnect = useCallback(
    (connection) => {
      setEdges((currentEdges) =>
        addEdge(
          {
            ...connection,
            type: 'smoothstep',
            animated: true
          },
          currentEdges
        )
      );
    },
    [setEdges]
  );

  const onNodeClick = useCallback(
    (_, node) => {
      setSelectedNodeId(node.id);
    },
    [setSelectedNodeId]
  );

  const onPaneClick = useCallback(() => {
    setSelectedNodeId(null);
  }, [setSelectedNodeId]);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      if (!type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY
      });

      const nodeLabels = {
        start: 'Start',
        approval: 'Manager Approval',
        condition: 'Condition',
        action: 'Action',
        email: 'Send Email',
        end: 'End'
      };

      const newNode = {
        id: `${type}-${Date.now()}`,
        type,
        position,
        data: {
          label: nodeLabels[type]
        }
      };

      setNodes((currentNodes) => [...currentNodes, newNode]);
    },
    [screenToFlowPosition, setNodes]
  );

  const onNodesDelete = useCallback(
    (deletedNodes) => {
      setSelectedNodeId((currentId) => {
        if (
          currentId &&
          deletedNodes.some((node) => node.id === currentId)
        ) {
          return null;
        }

        return currentId;
      });
    },
    [setSelectedNodeId]
  );

  return (
    <main
      className="canvas-container"
      ref={reactFlowWrapper}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        onNodesDelete={onNodesDelete}
        fitView
        deleteKeyCode={['Backspace', 'Delete']}
        selectionOnDrag
        panOnDrag={[1, 2]}
        attributionPosition="bottom-left"
      >
        <Background gap={20} size={1} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </main>
  );
}

export default WorkflowCanvas;