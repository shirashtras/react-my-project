const Form=()=>{
const handleChageText=(e)=>{console.log("typing...name"+e.target.value )}
const handleChageAge=(e)=>{ console.log("typing...age" +e.target.value) }
const handleChageEmail=(e)=>{ console.log("typing...email"+e.target.value)}
const handleClickSubmit=()=>{alert("הטופס נשלח בהצלחה")}
    return (
        <>
        <input  onChange={handleChageText}type="text" placeholder="enter your name"/>
        <input onChange={handleChageAge} type="number" placeholder="enter your age"/>
        <input  onChange={handleChageEmail} type="email" placeholder="enter your email"/>
        <button onClick={handleClickSubmit} type="submit">  Click Me</button>
        </>
    )
}
export default Form

