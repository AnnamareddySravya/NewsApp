import React from 'react'
import './Newscontent.css'
function NewsContent(props) {

    const { title, description, imageURL, author, url, date, source } = props;

    return (
        <div className='container mt-5'>

            <div class="card " style={{ width: '18rem' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', right: '0', position: 'absolute' }}>
                    <span class="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={!props.imageURL ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvGViiQBpdLjs0s37_MIyU-dGSV-Weab0_4N2JEeo0Q&s' : props.imageURL} class="card-img-top" alt="" height={'150px'} />

                <div class="card-body">
                    <h5 class="card-title">{title}....</h5>

                    <p class="card-text">{!props.description ? 'Royal Challengers Bangalore scripted history on Sunday by lifting their first Womens Premier League trophy with a win over Delhi Capitals in the final. RCB had a forgettable campaign last season where they finished fourth by winning just two matches'.slice(0, 60) : props.description.slice(0, 60)}...</p>

                    <p className='author'><small>By {!props.author ? 'William Shakespeare'.slice(0, 13) : props.author.slice(0, 13)}...on {new Date(date).toGMTString()}</small></p>

                    <a href={url} target='_blank' class="btn btn-primary fs-5">Read More...</a>

                </div>
            </div>
        </div>
    )
}

export default NewsContent



