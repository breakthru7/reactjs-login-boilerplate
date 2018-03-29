export function authHeader(){
    //return auth header with JWT token 
    let user = JSON.parse(localStorage.getItem('user'));

    //check if user and token exist 
    if(user && user.token){
        return { 'Authorization' : 'Bearer ' + user.token };
    }
    else {
        return {}; 
    }
}   