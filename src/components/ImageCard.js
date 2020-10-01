import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image.webformatURL} alt="" />                  
            <div className="px-6 py-4">        
                <div className="inline-flex">                    
                    <span className="flex-1 pr-3">
                        <img className="rounded-full h-10 w-10 flex items-center justify-center shadow-lg" src={image.userImageURL} alt="" />   
                    </span>
                    <div className="font-bold text-purple-500 text-xl mb-2">
                        Photo by {image.user}
                    </div>
                </div>
                <ul>
                <li>
                    <strong>Views : </strong>
                    {image.views}
                </li>
                <li>
                    <strong>Downloads : </strong>
                    {image.downloads}
                </li>
                <li>
                    <strong>Likes : </strong>
                    {image.likes}
                </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {
                    tags.map(tag => (
                        <span key={parseInt(Math.random() * 1000000)} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">
                            #{tag}
                        </span>
                    ))
                }                                
            </div>
        </div>
    )
}

export default ImageCard;
