export const database = () => {
  return new Promise((resolve, reject ) => {
    const db = {
      collection: {
        users: {
          1: {name: 'Viktor'},
          2: {name: 'Germanas'},
          3: {name: 'John'}
        }
      },
      find: (id) => {id},
      toArray: (id) => {[users[id]]}
    }
    resolve(db);
  })
}