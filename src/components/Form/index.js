import React, { useState } from "react";
import api from "../../api";
import s from "./index.css";

const Form = ({
    params,
    setFormParams,
    title,
    changeTitle,
    text,
    changeText
}) => {

    console.log("Form")
    const visibility = params.isVisible ? "visible" : "hidden";

    const addClick = () => {
        
        const title = document.getElementById("title").value;
        const text = document.getElementById("text").value;
        const image = document.getElementById("image").value;
        const tag = document.getElementById("tag").value;
        
        switch (params.method) {
            case "POST": api.addPost(title, text, image, [tag]); break;
            case "PATCH": api.updatePost(params.initParams.id, title, text, image, [tag]); break;
            default: console.error("Not supported method!");
        }
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
          })
    }

    return (
        <div style={{visibility: visibility}}>
            <input id="title" value={title} onChange={(e) => changeTitle(e.target.value)}>
                
            </input>
            <input id="text" value={text} onChange={(e) => changeText(e.target.value)}>
                
            </input>
            <input id="image" value="https://mnogo-krolikov.ru/wp-content/uploads/2019/06/https-murkoshka-ru-wp-content-uploads-1467565784.jpeg">
                
            </input>
            <input id="tag">
                
            </input>
            <button onClick={addClick}>
                {params.method === "POST" ? "add" : "update"}
            </button>
            <button onClick={closeClick}>
                close
            </button>
        </div>
    );
}

export default Form;
