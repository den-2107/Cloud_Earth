const config = {
    token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiY2EiLCJpYXQiOjE2NDcwMTM4ODcsImV4cCI6MTY3ODU0OTg4N30.bwYwcvR85l77PNcqdYkT05VRFpTDbtBsfDqJtfLzGYY",
    baseUrl: "https://api.react-learning.ru",
};

const onResponce = (data) =>
    data.ok ? data.json() : Promise.reject(`Error: ${data}`);

class Api {
    constructor({ token, baseUrl } ) {
        this.token = token;
        this.baseUrl = baseUrl;

    }

    getAllpost() {
        return fetch(`${this.baseUrl}/posts`, {
            headers: {
                authorization: this.token,
            },
        }).then(onResponce);
    }

    deletePost(_id) {
        return fetch(`${this.baseUrl}/posts/${_id}`, {
            // return fetch ("https://api.react-learning.ru/posts/:" + _id, {
                method: "DELETE",
                headers: {
                    authorization: this.token,
                },
            }
        ).then(onResponce);
    }    
    
    setLike(id) {
        return fetch(`${this.baseUrl}/posts/likes/${id}`, {
             method: "PUT",
                headers: {
                    authorization: this.token,
                },
            }
        ).then(onResponce);
    }
    
    deleteLike(id) {
        return fetch(`${this.baseUrl}/posts/likes/${id}`, {
             method: "DELETE",
                headers: {
                    authorization: this.token,
                },
            }
        ).then(onResponce);
    }

    getMe() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: {
                authorization: this.token,
            },
        }).then(onResponce);
    }
};

const api = new Api(config);

export default api;