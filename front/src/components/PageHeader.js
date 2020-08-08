import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    width: 100%;
    height: 42px;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    padding: 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    background-color: white;
    z-index: 2;
`;

function PageHeader() {



    return(
        <Header>
          {/* 해더 관련 정보들 집어넣기.. */}
          동창의 숲
        </Header>
    ); 

    

}


export default PageHeader;