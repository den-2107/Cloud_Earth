// import { postData } from "/posts.js";

const config = {
    token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiY2EiLCJpYXQiOjE2NDcwMTM4ODcsImV4cCI6MTY3ODU0OTg4N30.bwYwcvR85l77PNcqdYkT05VRFpTDbtBsfDqJtfLzGYY",
};

const onResponce = (data) =>
    data.ok ? data.json() : Promise.reject(`Error: ${data}`);

class Api {
    constructor({ token } ) {
        this.token = token;
        // this.useLocalData = true;
    }

    getAllpost() {
        // if (this.useLocalData) {
        //     return () => postData.json();
        // }

        return fetch("https://api.react-learning.ru/posts", {
            headers: {
                authorization: this._token,
            },
        }).then(onResponce);
    }
}

const api = new Api(config);

export default api;