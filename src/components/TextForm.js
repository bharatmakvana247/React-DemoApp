import React, { useState } from 'react'

export default function TextForm(props) {
    // const [success, setSuccess] = useState("False");
    //click event for Uppercase
    function setText() {
        if (text.length <= 0) {
            props.showAlert("Please Enter Field", "danger")
        } else {
            let newTxt = text.toUpperCase();
            setData(newTxt);
        }
    }

    //LowerCase font
    function LowText() {
        if (text.length === 0) {
            props.showAlert("Please Enter Field", "danger")
        } else {
            let LwTxt = text.toLowerCase();
            setData(LwTxt);
            props.showAlert("Text Lower Successfully", "success")
        }
    }

    //Text clear all
    function clrText() {
        if (text.length === 0) {
            props.showAlert("Text already cleared!", "danger")
        } else {
            let clrbtn = text.valueOf();
            clrbtn = '';
            setData(clrbtn)
        }
    }

    //Onchnage event for txt val change
    const handleChange = (event) => {
        setData(event.target.value);
        //setdata use for val set
    }

    //Remove Spaces Extra
    const rmvspace = () => {
        if (text.length === 0) {
            props.showAlert("Please Enter Field", "danger")
        } else {
            let str = text.replace(/\s+/g, ' ').trim();
            setData(str);
        }
    }

    //this func select all and copy val
    const copyText = () => {
        if (text.length === 0) {
            props.showAlert("Please Enter Field", "danger")
        } else {
            let text = document.getElementById("txtbox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text copied successfully.", "success")
        }
    }

    // const [dataPreview, setPreviewData] = useState("input val");
    // console.log(dataPreview);
    const [text, setData] = useState("");

    // const [text, setLwText] = useState("");
    //usestate is used for set the value  

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{fontSize:'1.3rem'}}>Enter Text Here :</label>
                    <textarea className="form-control" value={text} onChange={handleChange} id="txtbox" rows="8"></textarea>
                </div>
                <div className='col-auto'>
                    <button type="submit" className="btn btn-primary mb-3 mx-2" onClick={setText}>Covert to UpperCase</button>
                    <button type="submit" className="btn btn-primary mb-3 mx-2" onClick={LowText}>Covert to LwerCase</button>
                    <button type="submit" className="btn btn-primary mb-3 mx-2" onClick={clrText}>Clear</button>
                    <button type="submit" className="btn btn-primary mb-3 mx-2" onClick={copyText}>Copy Text</button>
                    <button type="submit" className="btn btn-primary mb-3 mx-2" onClick={rmvspace}>Remove Space</button>
                </div>
                <h2>your Text Summary</h2>
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} Words and {text.split(' ')===''?text.length:''} Characters</p>
                <p>{text.split(' ').filter((element)=>{return element.length!==0}).length * 0.008} Minutes Read</p>
                <h2>Preview</h2>
                {text.length > 0 ? text : "Input Something in TextEditor"}
            </div >
        </>
    )
}