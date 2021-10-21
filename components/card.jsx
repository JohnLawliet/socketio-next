import { HeartIcon, ChatIcon, ShareIcon, InformationCircleIcon } from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { useState } from "react"

const Card = ({post}) => {
    const [liked, setLiked] = useState(false)

    return (
        <div className="mb-3 mt-1">
            <div className="flex items-center p-1 font-medium text-sm ">
                <img 
                src={post.userImg} 
                alt=""
                className="h-7 w-7 object-cover rounded-full mr-2"
                />
                <span>{post.fullname}</span>
            </div>

            <img src={post.postImg} alt="" className="w-full h-[200px] object-cover"/>
            <div className="flex justify-between px-3 py-2 items-center">
                <div className="flex space-x-1">
                {
                    liked
                    ? <HeartIconFilled onClick={() => setLiked(prev=> !prev)} className="postBtn text-red-500"/> 
                    : <HeartIcon onClick={() => setLiked(prev=> !prev)} className="postBtn"/>
                }
                    
                    <ChatIcon className="postBtn"/>
                    <ShareIcon className="postBtn"/>
                </div>
                <div className="flex">
                <InformationCircleIcon className="postBtn"/>
                </div>
            </div>
        </div>
    )
}

export default Card
