import React, {useState, useEffect} from 'react';
import PageHeader from '../components/PageHeader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// 예시 데이터. 
const data = [
    {
        id : 1,
        title : '안녕 친구들',
        writer : 'JK',
        writen_date : '2020-07-31'
    },
    {
        id : 2,
        title : '안녕 친구들',
        writer : 'JK',
        writen_date : '2020-07-31'
    },
    {
        id : 3,
        title : '안녕 친구들',
        writer : 'JK',
        writen_date : '2020-07-31'
    },
    {
        id : 4,
        title : '안녕 친구들',
        writer : 'JK',
        writen_date : '2020-07-31'
    },
    {
        id : 5,
        title : '안녕 친구들',
        writer : 'JK',
        writen_date : '2020-07-31'
    },  {
        id : 1,
        title : '안녕 친구들',
        writer : 'JK',
        writen_date : '2020-07-31'
    },
    {
        id : 2,
        title : '안녕 친구들',
        writer : 'JK',
        writen_date : '2020-07-31'
    },
    {
        id : 3,
        title : '안녕 친구들',
        writer : 'JK',
        writen_date : '2020-07-31'
    },
    {
        id : 4,
        title : '안녕 친구들',
        writer : 'JK',
        writen_date : '2020-07-31'
    },
    {
        id : 5,
        title : '안녕 친구들',
        writer : 'JK',
        writen_date : '2020-07-31'
    },

]



function MainBoard(){

    const [posts, setPosts] = useState(data);
    const [loading, setLoading] = useState(false);

     
    useEffect(() => {
        // data fetch 가 끝나면 loading
        // TODO: API 연결.
    },[]);

    const onClick = () => {
        // TODO: 해당 글 페이지 이동.
    }

    
    return (
        <div>
            <div>
                게시판 페이지
            </div>
            <TableContainer component={Paper} style={{width: '650px'}}>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell>글번호</TableCell>
                <TableCell align="right">글제목</TableCell>
                <TableCell align="right">작성자</TableCell>
                <TableCell align="right">작성일</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {posts.map((post) => (
                <TableRow key={post.id} onClick={onclick}>
                <TableCell component="th" scope="row">{post.id}</TableCell >
                <TableCell align="right" >{post.title}</TableCell>
                <TableCell align="right">{post.writer}</TableCell>
                <TableCell align="right">{post.writen_date}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    );
}


export default MainBoard;