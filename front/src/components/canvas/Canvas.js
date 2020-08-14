import React from 'react';
import styled from 'styled-components';
import {useState,useEffect,useCallback,useMemo,useRef} from 'react';

const maxWidth = 590;

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
            const ctx = canvasRef.current.getContext('2d');
            ctx.drawImage(imageObject,0,0,canvasSize[0],canvasSize[1]);
        }
    },[imageObject]);

        // width rate, height rate
    /*
    원본 대비 스케일이 몇인지 판별하는 memo
    */
   const rate = useMemo(()=>{
    if(imageObject===null){
        return 0;
    }
    if(imageObject.width<=maxWidth){
        return 1;
    }
    let rate = maxWidth/imageObject.width;
    return rate;
    },[imageObject]);

    //canvas 사이즈 계산기, 0[width] 1[height]
    const canvasSize = useMemo(()=>{
        if(imageObject===null){
            return [0,0];
        }
        if(imageObject.width<=maxWidth){
            return [imageObject.width,imageObject.height];
        }
        console.log(rate);
        return [rate*imageObject.width,rate*imageObject.height];

    },[imageObject,rate]);

    return(
        <canvas width={canvasSize[0]} height={canvasSize[1]} ref={canvasRef} style={{display:'block',margin:'0 auto'}}>

        </canvas>
    );
}

export default Canvas;