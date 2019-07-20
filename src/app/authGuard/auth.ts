class authGuard{
     loggin() {
        localStorage.setItem("login","true")
    }
    logout(){
        localStorage.setItem("login","false")
    }
}