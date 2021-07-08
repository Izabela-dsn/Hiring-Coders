// interfaces = existe no typescript
// utilizamos para tipar dados
// se comportam semelhantes a tipos
// melhor utilizar interface do que type alias

interface User {
  name: string
  email: string
  address?: string
}

function getUser(): User {
  return {
    name: 'Izabela',
    email: 'izabela10@gmail.com'
  }
}

function setUser(user: User) {
  //...
}
