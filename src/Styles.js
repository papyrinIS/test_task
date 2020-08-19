import styled, {css} from "styled-components";
import background from "./image/background.png";

export const AppWrapper = styled.div`
font-family: 'Exo2',serif;
text-align: center;
margin: 0 auto;
display: flex;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
justify-content: center;
align-items: center;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
flex-direction: column;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-webkit-flex-direction: column;
-ms-flex-direction: column;
background: url(${background});
min-height: 100vh;
width: 100vw;
`
export const Title = styled.div`
font-size: 36px;
color:#fff;
height: 40px;
    margin: 30px;
`
export const OneCardBloke = styled.div`
margin: 20px;
position: relative;
width: 320px;
height: 510px;
cursor:pointer;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
&:hover{
}
& img{

}
`
export const OneCardImg = styled.div`
text-align: left;
position: relative;
width: 320px;
height: 480px;
cursor:pointer;
&:hover{
}
& img{

}
`
export const Cards = styled.div`
width: 100vw;
display: flex;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
justify-content: space-evenly;
align-items: center;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
flex-wrap: wrap;
-webkit-flex-wrap: wrap;
-ms-flex-wrap: wrap;
margin-top: -30px;
`
export const CardInfo = styled.div`
position: absolute;
z-index: 10;
top:27px;
left:50px;
background: transparent;
opacity: 1;
color:#939393;
${props => props.disabledId === props.id && css`
background: #f2f2f2;
opacity: .2;
`}

& div:nth-child(1){
font-size: 16px;
height: 20px;
}
& div:nth-child(2){
font-size: 48px;
font-weight: 900;
color:#000;

}
& div:nth-child(3){
font-size: 24px;
color:#000;
font-weight: 900;
}
`
export const Texthover = styled.div`
position: absolute;
top:0;
left:0;
height: 20px;
color:#e62e7a;
font-size: 16px;
font-weight: 500;
`
export const CardInfoElement = styled.div`
font-size: 14px;
color:#939393;
`
export const Weight = styled.div`
    color: #ffffff;
    position: absolute;
    top: 371px;
    left: 188px;
    font-size: 40px;
    font-weight: 500;
    width: 50px;
    height: 50px;
    display: flex;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
    justify-content: center;
    flex-direction: column;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-webkit-flex-direction: column;
-ms-flex-direction: column;
    align-items: center;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
    margin-bottom: -40px;
& span{
font-size: 35px;
margin-top: -18px;
font-weight: 400;
}

`
export const Text = styled.div`
font-size: 13px;
text-align: center;
margin-top: 14px;
height: 30px;
color:${props=>props.disabled?'#aaaa41':'#ffffff'};
& span{
color:#107cb2;
border-bottom: .5px dashed #107cb2 ;
}
`
export const HoverCircle =styled.div`
position: absolute;
bottom:-16px;
right:-16px;
z-index: 11;
height:80px;
width: 80px;
opacity: 0;
border-radius: 100%;

${props=>(props.Hover && props.img===1) && css`
background: #2ea8e6;
opacity: .3;
`}
${props=>(props.Hover && props.img===2) && css`
background: #e62e7a;
opacity: .3;
`}
`