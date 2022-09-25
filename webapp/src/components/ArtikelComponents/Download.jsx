import React, { useState } from 'react';
import xButton from "../../sorce/red-x-icon.svg";
import { ExternalLink } from 'react-external-link'

function Download({ download }) {

    const [window, setWindow] = useState(false);
    const [pwd, setPwd] = useState("1234");
    const [password, setPassword] = useState("");

    function pwdChange(event) {
        const value = event.target.value
        setPassword(value)
    }

    const passwordFenster = () => {
        setWindow(!window)
    }

    const checkPwdAndLoad = () => {
        if (pwd === password) {
            setPassword("")
            setWindow(!window)
        } else {
            console.log("falsches Password")
        }

    }


    return (
        <>
            <button onClick={passwordFenster}>Download</button>


            {window ?
                <div className='passwordWindow'>
                    <div className='passwordBox'>
                        <img src={xButton} alt="" className='xButton' onClick={passwordFenster} />
                        <h4>Um die Datei Runterzuladen, geben Sie bitte das Password ein.</h4>
                        <input type="password" onChange={pwdChange} />
                        {
                            pwd === password ?
                                <ExternalLink onClick={checkPwdAndLoad} href={download}>
                                    Download
                                </ExternalLink>
                                : <button disabled>Download</button>
                        }

                    </div>
                </div> : null}


        </>
    );
}

export default Download;