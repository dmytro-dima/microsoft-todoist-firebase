export const sortBy = {
  title: (a, b) => a.title.localeCompare(b.title),
  date: (a, b) => b.date - a.date,
  important: (a, b) => b.important - a.important,
  completed: (a, b) => b.completed - a.completed,
};
