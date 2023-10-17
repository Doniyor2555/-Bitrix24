export const getHeroes = (heroes) => {
  return {
    type: "GET_HEROES",
    payload: heroes
  }
}



export const name = (nameOfUser) => {
  return {
    type: "NAME",
    payload: nameOfUser
  }
}


export const email = (emailOfUser) => {
  return {
    type: "EMAIL",
    payload: emailOfUser
  }
}

export const password = (passwordOfUser) => {
  return {
    type: "PASSWORD",
    payload: passwordOfUser
  }
}