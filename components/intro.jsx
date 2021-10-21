import { useState } from "react"
import { posts } from "../data"
import Card from "./card"
import Navbar from "./navbar"

const Intro = () => {    
  const [username, setUsername] = useState("")
  const [user, setUser] = useState("")

    return (
        <div className="w-1/2 rounded-md border-green-500 border">
        {
            user? (
                <>
                    <Navbar />
                    {
                        posts.map(post => (
                            <Card 
                                key={post.id}
                                post={post}
                            />
                        ))
                    }
                    <span 
                    className="font-bold text-green-500 absolute top-4 right-12"
                    onClick={() => setUser('')}
                    >
                    {user
                    }</span>
                </>
            ) : (
                <div className="h-1/2 flex flex-col items-center justify-center">
                    <input 
                    type="text" 
                    placeholder="username"
                    className="w-1/2 p-3 mb-5"
                    onChange={e => setUsername(e.target.value)}
                    />
                    <button
                        onClick={() => setUser(username)}
                        className="w-7/12 p-3 bg-green-500 text-white border-none rounded-md"
                    >Login</button>
                </div>
            )
        }
            
        </div>
    )
}

export default Intro
