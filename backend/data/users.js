import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Adilet',
    email: 'adilet@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Daniiar',
    email: 'adiletdan@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Adaniiar',
    email: 'adiletik@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
