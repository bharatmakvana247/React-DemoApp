import React, { useState } from 'react'

export default function About() {

    const [myColor, setColor] = useState({
        backgroundColor: 'white',
        borderStyle: '2px',
        borderColor: 'black',
        color: 'black'
    });

    const [btnColor, setBtnClr] = useState({
        backgroundColor: 'white',
        marginTop: '10px',
        color: 'black'
    })

    const [btnTxt, btnTxtSet] = useState("Enable Light Button")

    const togleChng = () => {
        if (myColor.backgroundColor === 'black' && btnColor.backgroundColor === 'black') {
            setColor({
                backgroundColor: 'white',
                borderColor: 'black',
                color: 'black'
            });
            setBtnClr({
                backgroundColor: 'white',
                marginTop: '10px',
                color: 'black'
            });
            btnTxtSet("Enable Light Button");
        } else {
            setColor({
                backgroundColor: 'black',
                borderColor: 'white',
                color: 'white'
            });
            setBtnClr(
                {
                    backgroundColor: 'black',
                    marginTop: '10px',
                    color: 'white'
                });
            btnTxtSet("Enable Dark Button");
        }
    }

    return (
        <div className="accordion container" id="accordionExample" >
            <h2>About Us</h2>
            <div className="accordion-item" style={myColor}>
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myColor}>
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myColor}>
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myColor}>
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myColor}>
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myColor}>
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <button onClick={togleChng} style={btnColor}>{btnTxt}</button>
        </div>
    )
}
