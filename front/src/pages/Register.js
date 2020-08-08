import React, {useState} from 'react';


function Register(){
  const [inputs, setInputs] = useState({
    title: '',
    name: '',
    content: ''
  });

  const { title, name, content } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onClicked = () => {
    alert("Clicked!");
    setInputs({
        title: '',
        name: '',
        content: ''
    })
  };

  return (
      <div style = {{margin: "30px", width: "1004px"}}>
            <h1> 글 작성 </h1>
            <div>
                <input style = {{width: "400px", height:"30px" }} name="name" placeholder="작성자 이름" onChange={onChange} value={name}/>  
                <div style = {{height: "10px"}}></div>
                <input style = {{width: "600px", height:"30px" }} name="title" placeholder="제목을 입력해주세요" onChange={onChange} value={title} />
                <div style = {{height: "10px"}}></div>
            <div>
                <textarea  style = {{resize:"none", width: "1000px", height: "500px"}} name="content" placeholder="내용을 입력해주세요" onChange={onChange} value={content} />
            </div>

            <div>
                <button style = {{float:"right", height: "50px", width: "100px"}} onClick={onClicked} >완료</button>
            </div>

            </div>
     </div>
  );
}

export default Register;