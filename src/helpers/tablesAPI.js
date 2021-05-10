const table = {
  bet: 0,
}

// A mock function to mimic making an async request for data
export function fetchTables() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: new Array(2).fill(table) }), 5000)
  );
}

export const getCurrentGameById = (store, id) => {
  return store.tables.tables[id]
}