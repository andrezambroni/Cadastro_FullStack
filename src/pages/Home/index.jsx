import "./style.css"
import Trash from "../../assets/Trash.svg"

function Home() {
  const users = [
    {
      id: "23423dsfgg",
      name: "Andre",
      age: 25,
      email: "andre@gmail.com",
    },
    {
      id: "2waf321",
      name: "Wagner",
      age: 62,
      email: "wagner@gmail.com",
    },
    {
      id: "ghfgh",
      name: "Arthur",
      age: 20,
      email: "arthur@gmail.com",
    },
  ]

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name="nome" type="text" placeholder="Nome" />
        <input name="idade" type="text" placeholder="Idade" />
        <input name="email" type="text" placeholder="Email" />

        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>

          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home
