import React,{useContext} from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

function Mian() {

    const  {onSent,recentPrompt,showResult,loading,resultData,setInput,input}  = useContext(Context)


return (
    <div className='main'>
        <div className="nav">
            <p>Omar's Ai Chat</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult
            ?<>
                
            <div className="greet">
                <p><span>Hello, Omar.</span></p>
                <p>How Can I help you today sir. ?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <div className='icon-container'>
                    <img src={assets.compass_icon} alt="" className='icon'/>
                    </div>

                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <div className='icon-container'>

                    <img src={assets.bulb_icon} alt="" className='icon'/>
                    </div>
                </div>                
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <div className='icon-container'>

                    <img src={assets.message_icon} alt="" className='icon' />
                    </div> 
                </div>                
                <div className="card">
                    <p>Improve the readability of following code</p>
                    <div className='icon-container'>

                    <img src={assets.code_icon} alt="" className='icon' />
                </div>
            
                </div>
            </div>
            </>

            :
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :    
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                    
                </div>
            </div>

            }


            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"  placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may  display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini  Apps
                </p>
            </div>
        </div>
    </div>
)
}

export default Mian