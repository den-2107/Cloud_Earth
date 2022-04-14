import React, { useState } from "react";
import api from "../../api";
import s from "./index.css";

const Form = ({
    params,
    setFormParams,
    title,
    changeTitle,
    text,
    changeText,
    setPosts
}) => {

    console.log("Form")
    const display = params.isVisible ? "flex" : "none";

    const addClick = () => {
        
        const title = document.getElementById("title").value;
        const text = document.getElementById("text").value;
        const image = document.getElementById("image").value;
        const tag = document.getElementById("tag").value;
        
        switch (params.method) {
            case "POST": 
                api.addPost(title, text, image, [tag]);
                api.getAllpost().then(data => setPosts(data));
                break;
            case "PATCH": 
                api.updatePost(params.initParams.id, title, text, image, [tag]);
                api.getAllpost().then(data => setPosts(data));
                break;
            default: console.error("Not supported method!");
        }

        setFormParams({
            isVisible: false,
            method: "POST",
            initParams: {
                id: null,
                title: "",
                text: "",
                image: "",
                tags: []
            }
          });
    };

    const closeClick = () => {
        setFormParams({
            isVisible: false,
            method: "POST",
            initParams: {
                id: null,
                title: "",
                text: "",
                image: "",
                tags: []
            }
          });
    }

    return (
        <div className="popup" style={{display: display}}>
            <div className="form">
                <p>Введите заголовок</p>
                <input id="title" value={title} onChange={(e) => changeTitle(e.target.value)}/>
                <p>Введите текст</p>
                <input id="text" value={text} onChange={(e) => changeText(e.target.value)}/>
                <p>Вставьте ссылку на картинку</p>
                <input id="image" />
                <p>Укажите теги </p>
                <input id="tag"/>
                <div className="buttonActiv">
                    <button className="button" onClick={addClick}>
                        {params.method === "POST" ? "Добавить пост" : "Обновить пост"}
                    </button>
                    <button className="button" onClick={closeClick}>
                        Отмена
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Form;
