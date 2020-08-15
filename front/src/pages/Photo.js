import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import {Image as BoostImage} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import axios from 'axios';
import addPhoto from './addPhoto1.png';
import './Photo.css';
import {useState,useCallback,useMemo,useEffect,useRef} from 'react';
import Canvas from '../components/canvas/Canvas';

const ManNameSpace = styled.div`
padding:5px;
text-align:center;
`;

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

    const requestApi = (imageFile) => {
        let url = "http://localhost:3000/face";
    
        let formData = new FormData();
        formData.append("img", imageFile);
    
        return fetch(url,{
            method: "POST",
            body: formData,
          })
          .then((result) => {
            return result.json();
          })
          .then((json) => {
            let result = [];
            json.faces.forEach((e)=>{
                let age = e.age.value;
                let gender = e.gender.value;
                let emotion = e.emotion.value;
                let x = e.roi.x;
                let y = e.roi.y;
                let width = e.roi.width;
                let height = e.roi.height;
                result.push({
                    age,
                    gender,
                    emotion,
                    x,
                    y,
                    width,
                    height
                });
            });
            setBoxInfos(result);
            setMansName((new Array(result.length)).fill(''));
            setSelectedNumber(-1);
          })
          .catch((err) => {
            new Error(" API Error");
          });
    }

    
    const [imgObject,setImgObject] = useState(null);
    const [manLength,setManLength] = useState(0);
    const imageDom = useRef(null);

    const [imageInfoURL,setimageInfoURL] = useState(null);
    // selectedNumber
    const [selectedNumber,setSelectedNumber] = useState(-1);
    // const [boxInfos,setBoxInfos] = useState([]);
    const [boxInfos,setBoxInfos]=useState([]);
    const [mansName,setMansName] = useState([]);

    const manBedges = useMemo(()=>{
    },[manLength]);


    const imageChange = useCallback((e)=>{
        let inputNode = e.target;
        let loadedFiles = inputNode.files;
        let image = imageDom.current;
        let newImageInfo = new Image();
        requestApi(loadedFiles[0]);
        image.src = window.URL.createObjectURL(loadedFiles[0]);
        setimageInfoURL(image.src);
        setImgObject(loadedFiles[0]);
    },[]);

    const yameWidth = useMemo(()=>{
        if(imageInfoURL===null){
            return {

            };
        }
        return{
            width:'0px',
            height:'0px',
        }
    },[imageInfoURL]);

    const manNameInput = useMemo(()=>{
    return selectedNumber !== -1 ? <p>{selectedNumber}번째 인물의 이름을 지어주세요!</p> : <p>사람의 얼굴을 눌러주세요.</p>
    },[selectedNumber]);

    const manNameChange = (e)=>{
        console.log(e.target.value);
        if(selectedNumber!==-1){
            let newArray = [...mansName];
            newArray[selectedNumber]=e.target.value;
            setMansName(newArray);
        }
    }

    const inputValue = useMemo(()=>{
        if(selectedNumber===-1){
            return '';
        }else{
            console.log(mansName);
            return mansName[selectedNumber];
        }
    },[selectedNumber,mansName]);

    const manInfo = useMemo(()=>{
        if(selectedNumber===-1||boxInfos.length===0||boxInfos===undefined||boxInfos[selectedNumber]===undefined){
            return null;
        }
        let {age,gender,emotion} = boxInfos[selectedNumber];
        let list = [
            age,
            gender,
            emotion
        ];
        list = list.filter((e)=>e!==undefined);
        return list.map((e)=>{
            return <Badge variant="secondary" style={{marginRight:'10px'}}>{e}</Badge>
        })
    },[selectedNumber,boxInfos]);
    
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
                    <BoostImage id="image" src={addPhoto} fluid ref={imageDom} style={yameWidth} />
                    <Canvas photoURL={imageInfoURL} boxInfos={boxInfos} selectedNumber={setSelectedNumber}/>
                </ImageWrapper>
                <div className="image-tag" style={{position:'relative',width:'80px',height:'30px'}}>
                    <input style={{width:'80px',height:'30px', position:'absolute'}}
                        onSubmit={(e)=>{
                            e.target.nextElementSibling.style.display='block';
                        }}
                        /*{ 질문가능해요 -> 도와드릴게 있나요?. 퇴근할준비해요! . }
                        */
                    ></input>
                    <Badge className="tag" style={{width:'80px',height:'30px' , position:'absolute'}} variant="secondary"
                        onClick={(e)=>{
                            e.target.style.display='none';
                        }}
                    >New</Badge> 
                </div>
                <div>
                    {manInfo}
                </div>
                
                {/* <Badge variant="secondary">New</Badge>
                <Badge variant="secondary">New</Badge>
                <Badge variant="secondary">New</Badge> */}
                <ManNameSpace>
                    {manNameInput}
                    <input value={inputValue} onChange={manNameChange}/>
                </ManNameSpace>
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

export default Photo;
