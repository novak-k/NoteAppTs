export interface Note {
  id: number;
  name: string;
  createdAt: string;
  content: string;
  category: string;
  archived: boolean;
  dates?: string[];
}

export const initialNotes = [
  {
    id: 1,
    name: 'Grocery',
    createdAt: '2023-07-25',
    content: 'Buy groceries',
    category: 'Task',
    archived: false,
  },
  {
    id: 2,
    name: 'JS tutorial',
    createdAt: '2023-07-25',
    content: 'Finish test task with JS tutorial',
    category: 'Idea',
    archived: false,
  },
  {
    id: 3,
    name: 'Color for the design',
    createdAt: '2023-07-25',
    content: 'Pink or light blue color for the design?',
    category: 'Random Thought',
    archived: false,
  },
  {
    id: 4,
    name: 'Video CL',
    createdAt: '2023-07-25',
    content: 'Finish your video CL',
    category: 'Task',
    archived: false,
  },
  {
    id: 5,
    name: 'CV',
    createdAt: '2023-07-25',
    content: 'Send your CV to the Google HR department',
    category: 'Task',
    archived: false,
  },
  {
    id: 6,
    name: 'Online yoga',
    createdAt: '2023-07-25',
    content: 'Start online yoga training!',
    category: 'Idea',
    archived: false,
  },
  {
    id: 7,
    name: 'Dangerous orcas',
    createdAt: '2023-07-25',
    content: 'Why orcas are so dangerous?',
    category: 'Random Thought',
    archived: false,
  },
  {
    id: 8,
    name: 'Dentist appointment',
    createdAt: '2023-07-26',
    content: 'I’m gonna have a dentist appointment on 3/5/2021, I moved it from 5/5/2021',
    dates: ['3/5/2021', '5/5/2021'],
    category: 'Task',
    archived: false,
  },
];
