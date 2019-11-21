export function isAuthenticated(){
  if(localStorage.getItem('AUTH-TOKEN') === null){
    return false;
  }else{
    return true;
  }
}