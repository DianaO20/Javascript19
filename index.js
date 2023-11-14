

const getUsers =(limit) =>{
    return fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
}
const renederUsers = async() =>{
    try{
    const response =await getUsers(5).then(res => res.json())
    if(!Array.isArray(response)){
       throw new SyntaxError ('Error')
    }
    response.forEach(item => console.log(item))


    }catch (e){

       console.log(e) 
    }
}
renederUsers()