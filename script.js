let arrUser = []

//Create
export const AddUser = () => {
    const nameUser = prompt("Qual o deseja adicionar nome:")
    const emailUser = prompt("Informe o email da pessoa")

    if (!nameUser || !emailUser) {
        alert("Os campos são obrigatórios! ");
      }


    arrUser.push({ nameUser, emailUser })

    console.log(arrUser)

}

//Read
export const ListUser = () => {

    let listUser = "";

    arrUser.forEach((dataUser) => {

        listUser += `nome: ${dataUser.nameUser} email: ${dataUser.emailUser} \n`

    })

    alert("*****Lista de usuarios****** \n" + listUser)
}

//Update
export const UpdateUser = () => {
    const findEmail = prompt("informe o email que você deseja atualizar:")
    const userFound = arrUser.find(user => user.emailUser === findEmail)

    if (!userFound) {
        alert("Usuario não foi encontrado")
        return;
    }

    const newEmail = prompt("Informe o seu novo email:")

    if (newEmail) {
        userFound.emailUser = newEmail
        alert("Email atualizado com sucesso")

    }

    let confirm = window.confirm("Deseja atualizar o nome também?")

    if (confirm) {
        const newName = prompt("Informe o novo nome:")
        if (newName) {
            userFound.nameUser = newName
            alert("Nome atualizado com sucesso")

        }
    }
}

//Delete
export const DeleteUser = () => {

    const findEmail = prompt("informe o email da conta que você deseja deletar:")
    const emailIndiceFound = arrUser.findIndex(email => email.emailUser === findEmail)

    if (!emailIndiceFound) {
        alert("Usuario não foi encontrado")
        return;
    }

    let confirm = window.confirm(`Tem certeza que deseja excluir sua conta com o email: ${findEmail}?`)

    if(confirm){
    arrUser.splice(emailIndiceFound, 1)
    alert("Usuario Deleatado com sucesso")
    }
}