import React from 'react';
import styled from 'styled-components';
import {useState,useEffect,useCallback,useMemo,useRef} from 'react';

function loadImage(src){
    return new Promise((resolve,reject)=>{
        console.log('loadImage');
        let image = new Image();
        image.src =src;
        image.onload =function(){
            resolve(image);
        }
    });
}

const Canvas = ({photoURL,selectedNumber})=>{
    const canvasRef=useRef(null);
    const [imageObject,setImageObject] = useState(null);

    useEffect(()=>{
        if(photoURL===null){
            setImageObject(null);
        }else{
            loadImage(photoURL).then(value=>{
                console.log(value.width);
                setImageObject(value);
            })
        }
    },[photoURL]);

    //canvas 그림 업로드
    useEffect(()=>{
        if(imageObject!==null){

        }
    },[imageObject]);

    //canvas에 그림 그리기(네모 박스)

    const width = useMemo(()=>{
        if(imageObject===null){
            return 0;
        }else{
            console.log(imageObject);
            return imageObject.width;
        }
    },[imageObject]);

    const height = useMemo(()=>{
        if(imageObject===null){
            return 0;
        }
        console.log(imageObject);
        return imageObject.height;
    },[imageObject]);

    return(
        <canvas width={width} height={height} ref={canvasRef}>

        </canvas>
    );
}

export default Canvas;