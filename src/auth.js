export const auth = {
    isAuthenticated: false,
    authenticate(login, pass){
        if(login === "breno" && pass ==="123"){
            this.isAuthenticated = true;
        }
    },
    signout(){
        this.isAuthenticated = false;
    }
}