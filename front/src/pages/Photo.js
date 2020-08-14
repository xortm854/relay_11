import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import axios from 'axios';
import addPhoto from './addPhoto1.png';
import './Photo.css';
import {useState,useCallback,useMemo,useEffect,useRef} from 'react';

const PhotoHeader = styled.header`
display: flex;
justify-content:space-between;
align-items:center;
padding:10px;
margin-bottom:10px;
`;

const PhotoFooter = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
padding:20px;
`

const PhotoMain = styled.main`
padding:10px;
`;

const ImageWrapper = styled.div`
margin:0 auto;
text-align:center;
`;

const apiURL = 'https://openapi.naver.com/v1/vision/face';
const apiId = '2rPyGSTC49Dfplyx5UvD';
const apiSecret = 'RuhsLmEX55';
const val = {fontWeight:'bold'}
const Photo = ()=>{
    const [imgObject,setImgObject] = useState(null);
    const [manLength,setManLength] = useState(0);
    const imageDom = useRef(null);

    const manBedges = useMemo(()=>{

    },[manLength]);

    const testAPI = useEffect(()=>{
        console.log('call');
        if(imgObject!==null){
            requestApi(imgObject);
        }
    },[imgObject]);

    const imageChange = useCallback((e)=>{
        let inputNode = e.target;
        let loadedFiles = inputNode.files;
        let image = imageDom.current;
        requestApi(loadedFiles[0]);
        image.src = window.URL.createObjectURL(loadedFiles[0]);
        image.onload = (e) => {
            window.URL.revokeObjectURL(e.target.src);
        };
        setImgObject(loadedFiles[0]);
    },[]);
    
    return (
    
        <div style={{backgroundColor:'#F7F9FA'}}>
            <div>
                <PhotoHeader>
                    <h1>모여봐요 동창의 숲</h1>
                    <span style={{fontWeight:'bold'}}>부캠초등학교 2020년 입학생</span>
                </PhotoHeader>
            </div>
            <nav style={{backgroundColor:'#e0e0e0'}}>
                <Link to={"/"}>
                    <Button style={{marginRight:'10px', width:'120px'}} variant="primary">entry</Button>
                </Link>
                <Link to={"/main"}>
                    <Button style={{marginRight:'10px', width:'120px'}} variant="secondary">자유게시판</Button>
                </Link>
                
                <Button style={{marginRight:'10px', width:'120px'}} variant="secondary">사진첩</Button>   
            </nav>    
            <PhotoMain>
                <ImageWrapper>
                    {/* <Image id="image" src="https://user-images.githubusercontent.com/50394490/90222363-e2a89f00-de46-11ea-8ae7-ba3007602d84.png" fluid /> */}
                    <Image id="image" src={addPhoto} fluid ref={imageDom} />
                </ImageWrapper>
                <div className="image-tag" style={{position:'relative',width:'80px',height:'30px'}}>
                    <input style={{width:'80px',height:'30px', position:'absolute'}}
                        onSubmit={(e)=>{
                            e.target.nextElementSibling.style.display='block';
                        }}
                        /*{ 질문가능해요 -> 통신할때 axios 안쓰시고 fetch 쓰시는건가요?? 지금 프론트에서는 fetch 썼어요. 편하신걸로 골라 쓰시면 될것 같아요. }
                        
                        */
                    ></input>
                    <Badge className="tag" style={{width:'80px',height:'30px' , position:'absolute'}} variant="secondary"
                        onClick={(e)=>{
                            e.target.style.display='none';
                        }}
                    >New</Badge> 
                </div>
                
                {/* <Badge variant="secondary">New</Badge>
                <Badge variant="secondary">New</Badge>
                <Badge variant="secondary">New</Badge> */}
                <PhotoFooter>
                    <input style={{width:'60%'}} value="사진을 첨부해주세요." disabled></input>
                    <Button variant="secondary" size="sm">
                        <label htmlFor="imageInput" style={{marginBottom:'0px'}}>
                            사진 첨부 버튼
                        </label>
                    </Button>
                    {/* <Button variant="primary"  size="sm">작성 하기</Button> */}
                    <input id="imageInput" style={{backgroundColor:'green',visibility:'hidden',width:'1px'}}
                        type="file" 
                        onChange={imageChange}>
                    </input>
                </PhotoFooter>
            </PhotoMain>
        </div>
    );
}

const requestApi = (imageFile) => {
    let url = "https://openapi.naver.com/v1/vision/face";

    console.log(imageFile);
    let formData = new FormData();
    formData.append("image", imageFile);
    console.log(formData);

    return fetch(url,{
        method: "POST",
        cache: "no-cache",
        headers: {
                'X-Naver-Client-Id':apiId,
                'X-Naver-Client-Secret':apiSecret,
                'Access-Control-Allow-Origin': '*',     
                'Allow-Control-Allow-Origin': '*'     
        },
        body: formData,
      })
      .then((result) => {
        alert(result);
        return result.json();
      })
      .then((json) => {
        alert(json);
        console.log(json);
      })
      .catch((err) => {
        new Error(" API Error");
      });
}




export default Photo;
