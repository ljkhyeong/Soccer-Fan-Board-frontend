import {Button, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import {axiosInstance} from "../../../service/ApiService";

const Board = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosInstance.get('/posts')
            .then(response => {
                setPosts(response.data.result.content);
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const handleCreatePost = () => {
        props.setShowContainer('postPage');
    };

    return (
        <>
            <Button onClick={handleCreatePost}>글 작성</Button>
            <Table className="mt-4" hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>작성일</th>
                    <th>조회수</th>
                </tr>
                </thead>
                <tbody>
                {posts.map((post, index) => (
                    <tr key={post.postId}>
                        <td>{index + 1}</td>
                        <td>{post.title}</td>
                        <td>Jane Smith</td>
                        <td>2023-01-20</td>
                        <td>0</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </>
    );
}

export default Board;