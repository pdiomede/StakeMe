import React from 'react';
import Faker from 'faker';

const CommentDetail = (props) => {
    //console.log(props);
    return (
        <table border="0">
                <tr>
                    <td>
                        <div className="comment">
                            <a href="/" className="avatar">
                                <img alt="avatar" height="50px" width="50px" src={props.avatarPicture} />
                            </a>
                         </div>
                    </td>
                    

                    <td>
                        <div className="content">
                            <a href="/" className="author">
                                {props.author}
                            </a>
                        </div>

                        <div className="metadata">
                            <span className="date">
                                {props.timeAgo}
                            </span>
                        </div>

                        <div className="text">
                            {props.content}
                        </div>
                    </td>
                </tr>
            </table>
    );
};

export default CommentDetail;