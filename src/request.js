export class Request {
    constructor(url) {
        this.url = url;
    }
    async get(){
        const response = await fetch(this.url);
        const responseData = await response.json();

        return responseData;
    }
    async post(data){
        const response = await fetch(this.url,{
            method: "POST",
            body: JSON.stringify(data),
            headers : {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        const reponseData = await response.json();

        return reponseData;
    }
    async put(id,data){
        const response = await fetch(this.url + "/" + id,{
            method: "PUT",
            body: JSON.stringify(data),
            headers : {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });
        const reponseData = await response.json();

        return reponseData;
    }
    async delete(id){
        const response = await fetch(this.url + "/" + id,{
            method: "DELETE",
            });
            return "Veri Silindi";
    }
}
