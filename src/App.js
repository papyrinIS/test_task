import React, {useEffect} from 'react';

import card1 from "./image/card1.png"
import card2 from "./image/card2.png"
import card3 from "./image/card3.png"
import {
    AppWrapper,
    CardInfo,
    CardInfoElement,
    Cards, HoverCircle,
    OneCardBloke,
    OneCardImg, Text,
    Texthover,
    Title,
    Weight
} from "./Styles";


export const App = () => {
    const cards = [
        {
            id: 1,
            subTitle: 'с фуа-гра',
            description: ['10 порций', 'мышь в подарок'],
            weight: "0,5",
            textDisabled: 'Печалька, с фуа-гра закончился.',
            textSelected: 'Печень утки разварная с артишоками.'
        },
        {
            id: 2,
            subTitle: 'с рыбой',
            description: ['40 порций', '2 мыши в подарок'],
            weight: " 2 ",
            textDisabled: 'Печалька, с рыбой закончился.',
            textSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        },
        {
            id: 3,
            subTitle: 'с курой',
            description: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
            weight: " 5 ",
            textDisabled: 'Печалька, с курой закончился.',
            textSelected: 'Филе из цыплят с трюфелями в бульоне.'
        }
    ]
    let disableCard = Math.floor(Math.random() * (4 - 1) + 1)
    const OneCard = cards.map(m => <Card disableCard={disableCard} cardInfo={m} key={m.id}/>
    )
    return (
        <AppWrapper>
            <Title>Ты сегодня покормил кота?</Title>
            <Cards>
                {OneCard}
            </Cards>
        </AppWrapper>
    );
}


const Card = ({cardInfo, disableCard}) => {
    const [img, setImg] = React.useState(1)
    const [showTextHover, setShowTextHover] = React.useState(false)
    const [Hover, setHover] = React.useState(false)
    useEffect(() => {
        if (disableCard === cardInfo.id)
            setImg(3)
    }, [cardInfo, disableCard])

    const Pay = () => {
        if (img === 1) setImg(2)
        if (img === 2) setImg(1)
        setShowTextHover(false)
        setHover(false)
    }

    const ExitTextHover = () => {
        if (disableCard === cardInfo.id) setShowTextHover(false)
        else if (img === 2) {
            setShowTextHover(false)
            setHover(false)
        } else if (img === 1) setHover(false)
    }


    const EnterTextHover = () => {
        if (disableCard === cardInfo.id) setShowTextHover(false)
        else if (img === 2) {
            setShowTextHover(true)
            setHover(true)
        } else if (img === 1) setHover(true)
    }
    return <OneCardBloke>
        <OneCardImg onMouseEnter={EnterTextHover} onMouseLeave={ExitTextHover} onClick={Pay}>
            <CardInfo disabledId={cardInfo.id} id={disableCard}>
                <div>{showTextHover
                    ? <Texthover>Котэ не одобряет?</Texthover>
                    : <div>Сказочное заморское яство</div>}</div>
                <div>Нямушка</div>
                <div> {cardInfo.subTitle}</div>
                {cardInfo.description.map(m => <CardInfoElement key={m}>{m}</CardInfoElement>)}
                <Weight>
                    {cardInfo.weight}
                    <span>кг</span>
                    <HoverCircle img={img} Hover={Hover}/>
                </Weight>
            </CardInfo>
            {img === 1 && <img alt="card" src={card1}/>}
            {img === 2 && <img alt="card" src={card2}/>}
            {img === 3 && <img alt="card" src={card3}/>}
        </OneCardImg>
        {img === 1 && <Text>Чего сидишь? Порадуй котэ, <span onClick={Pay}>купи.</span></Text>}
        {img === 2 && <Text>{cardInfo.textSelected}</Text>}
        {img === 3 && <Text disabled={true}>{cardInfo.textDisabled}</Text>}
    </OneCardBloke>
}


