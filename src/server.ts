console.log("oi", 2 + 3, "as" + 4);

interface User {
  id: number;
  nome: string;
  idade: number;
  endereco: {
    rua: string;
    numero: number;
  };
}

function showUsername(user: User) {
  console.log("ID: ", user.id);
}

const usuario = {
  id: 123,
  nome: "Rafael",
  idade: 34,
  endereco: {},
};

showUsername(usuario);
