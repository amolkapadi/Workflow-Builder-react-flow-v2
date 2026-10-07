export const initialNodes = [
  {
    id: 'start',
    type: 'start',
    position: {
      x: 300,
      y: 50
    },
    data: {
      label: 'Start'
    }
  },
  {
    id: 'approval',
    type: 'approval',
    position: {
      x: 270,
      y: 230
    },
    data: {
      label: 'Manager Approval'
    }
  },
  {
    id: 'end',
    type: 'end',
    position: {
      x: 300,
      y: 450
    },
    data: {
      label: 'Approved'
    }
  }
];

export const initialEdges = [
  {
    id: 'start-approval',
    source: 'start',
    target: 'approval',
    type: 'smoothstep',
    animated: true
  },
  {
    id: 'approval-end',
    source: 'approval',
    target: 'end',
    type: 'smoothstep',
    animated: true
  }
];