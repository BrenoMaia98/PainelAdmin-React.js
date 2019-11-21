export const auth = {
    isAuthenticated: false,
    
    authenticate(login , pass, cb){
		//if(login === "breno" && pass ==="123"){
		if(true){
            this.isAuthenticated = true;
            setTimeout(cb, 100);
        }else{
            alert("Senha e/ou usuário incorreto");
        }
	},
    signout(){
        this.isAuthenticated = false;
    }
}