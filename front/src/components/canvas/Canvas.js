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

const Canvas = ({photoURL,boxInfos,selectedNumber})=>{
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
        // 이미지를 그린후 박스를 체크해준다.
        if(boxInfos.length!==0 && imageObject !== null){
            console.log('run');
            const ctx = canvasRef.current.getContext('2d');
            boxInfos.forEach((e)=>{
                console.log(e);
                console.log(rate);
                ctx.strokeRect(e.x*rate,e.y*rate,e.width*rate,e.height*rate);
            });
        }
    },[imageObject,boxInfos]);

    // 클릭 되어졌을때 수정하는 함수
    useEffect(()=>{

    },[]);
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

        return [rate*imageObject.width,rate*imageObject.height];

    },[imageObject,rate]);

    return(
        <canvas width={canvasSize[0]} height={canvasSize[1]} ref={canvasRef} style={{display:'block',margin:'0 auto'}}>

        </canvas>
    );
}

export default Canvas;