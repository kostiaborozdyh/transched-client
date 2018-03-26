const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('stop/index', (req, res) => {
    res.send([
        {id: '5ab878b63fc038833137a051', title: 'ЧЛФЗ "Аврора"'},
        {id: '5ab878b6852bf09243009759', title: 'завод "Хімреактив"'},
        {id: '5ab878b6df3ed2cb2365e4b5', title: 'ДОК'},
        {id: '5ab878b67bd5a7e68501f425', title: 'Консервний комбінат'},
        {id: '5ab878b63dfe99a16f230cc8', title: 'Хлібозавод'},
        {id: '5ab878b6810bccb32d10d61d', title: 'вул. Добровольського'},
        {id: '5ab878b6baf76a9f607c243c', title: 'пл. 700-річчя Черкас'},
        {id: '5ab878b68527e29fb495bd02', title: 'Університет'},
        {id: '5ab878b612f6e68fc6743947', title: 'DEPO\'t center'},
        {id: '5ab878b61f67bb3153935ab7', title: 'вул. Юрія Іллєнка'},
        {id: '5ab878b6d2bd4ae22b4a78fe', title: 'вул. Новопречистенська'},
        {id: '5ab878b6a0e3314b75764ae7', title: 'вул. Кривалівська'},
        {id: '5ab878b649f09f24d1fbc955', title: 'вул. Пастерівська'},
        {id: '5ab878b6ad20f7776db0ab70', title: 'пл. Богдана Хмельницького'},
        {id: '5ab878b60afbf3b6e4fef886', title: 'Будинок Торгівлі'},
        {id: '5ab878b6a0ecbeaabade80ab', title: 'Драмтеатр'},
        {id: '5ab878b698d7a7d6d5b9f3c3', title: 'пл. Соборна'},
        {id: '5ab878b6b3f78c92e5b0b8cd', title: 'пл. Слави'},
        {id: '5ab878b61d44559ab4f0639d', title: 'вул. Пушкіна'},
        {id: '5ab878b605f1c8800263cb3d', title: 'Університет'},
        {id: '5ab878b626500f5659aa7ca8', title: 'вул. Кирилова (на вимогу)'},
        {id: '5ab878b6c245253bf24dc9e4', title: 'вул. Казбетська'},
        {id: '5ab878b63669a4ee3cbd4127', title: 'вул. Можайського'},
        {id: '5ab878b60f4170f14109836f', title: 'Агропроммеханізація'},
        {id: '5ab878b69e11f3fca04a10ce', title: 'Міська лікарня №1'},
        {id: '5ab878b6a125356b87d2e31d', title: 'Обласна лікарня'},
        {id: '5ab878b6eec9b1e5985ec77f', title: 'м/н Соснівка'},
        {id: '5ab878b6fa36a8a51769f5c8', title: 'Міська лікарня №2'},
        {id: '5ab878b6fad496e62dc66b47', title: 'Лісгосп'},
        {id: '5ab878b6ac7fc198a05f0493', title: 'Автошкола "Богдан"'},
        {id: '5ab879a8d38d80a26868ac08', title: 'санаторій "Україна"'}
    ])
});

app.get('troleybusschedule/index', (req, res) => {
    res.send(
        [
            {
                key: '1',
                title: '1:ЧЛФЗ "АВРОРА" - САНАТОРІЙ "УКРАЇНА"',
                stops: [
                    {
                        direction: 'ЧЛФЗ "АВРОРА" - САНАТОРІЙ "УКРАЇНА"',
                        points: {
                            '5ab878b63fc038833137a051': '10:00',
                            '5ab878b6852bf09243009759': '10:05',
                            '5ab878b6df3ed2cb2365e4b5': '10:08',
                            '5ab878b63dfe99a16f230cc8': '10:12',
                            '5ab878b6810bccb32d10d61d': '10:15',
                            '5ab878b6baf76a9f607c243c': '10:18',
                            '5ab878b68527e29fb495bd02': '10:23',
                            '5ab878b612f6e68fc6743947': '10:27',
                            '5ab878b6d2bd4ae22b4a78fe': '10:35',
                            '5ab878b6a0e3314b75764ae7': '10:40',
                            '5ab878b649f09f24d1fbc955': '10:45',
                            '5ab878b6ad20f7776db0ab70': '10:50',
                            '5ab878b60afbf3b6e4fef886': '10:55',
                            '5ab878b698d7a7d6d5b9f3c3': '11:00',
                            '5ab878b6b3f78c92e5b0b8cd': '11:10',
                            '5ab878b61d44559ab4f0639d': '11:15',
                            '5ab878b605f1c8800263cb3d': '11:20',
                            '5ab878b6c245253bf24dc9e4': '11:25',
                            '5ab878b63669a4ee3cbd4127': '11:30',
                            '5ab878b60f4170f14109836f': '11:35',
                            '5ab878b69e11f3fca04a10ce': '11:40',
                            '5ab878b6a125356b87d2e31d': '11:45',
                            '5ab878b6eec9b1e5985ec77f': '11:50',
                            '5ab878b6fa36a8a51769f5c8': '11:55',
                            '5ab878b6fad496e62dc66b47': '12:00',
                            '5ab879a8d38d80a26868ac08': '12:05'
                        }
                    },
                    {
                        direction: 'САНАТОРІЙ "УКРАЇНА" - ЧЛФЗ "АВРОРА"',
                        points: {
                            '5ab879a8d38d80a26868ac08': '12:10',
                            '5ab878b6ac7fc198a05f0493': '12:15',
                            '5ab878b6fa36a8a51769f5c8': '12:20',
                            '5ab878b6eec9b1e5985ec77f': '12:25',
                            '5ab878b6a125356b87d2e31d': '12:30',
                            '5ab878b69e11f3fca04a10ce': '12:35',
                            '5ab878b60f4170f14109836f': '12:40',
                            '5ab878b63669a4ee3cbd4127': '12:45',
                            '5ab878b6c245253bf24dc9e4': '12:50',
                            '5ab878b626500f5659aa7ca8': '12:55',
                            '5ab878b605f1c8800263cb3d': '13:00',
                            '5ab878b61d44559ab4f0639d': '13:05',
                            '5ab878b698d7a7d6d5b9f3c3': '13:10',
                            '5ab878b6a0ecbeaabade80ab': '13:15',
                            '5ab878b60afbf3b6e4fef886': '13:20',
                            '5ab878b6ad20f7776db0ab70': '13:25',
                            '5ab878b649f09f24d1fbc955': '13:30',
                            '5ab878b6a0e3314b75764ae7': '13:35',
                            '5ab878b6d2bd4ae22b4a78fe': '13:40',
                            '5ab878b61f67bb3153935ab7': '13:45',
                            '5ab878b68527e29fb495bd02': '13:50',
                            '5ab878b6baf76a9f607c243c': '13:55',
                            '5ab878b63dfe99a16f230cc8': '14:00',
                            '5ab878b67bd5a7e68501f425': '14:05',
                            '5ab878b6df3ed2cb2365e4b5': '14:10',
                            '5ab878b63fc038833137a051': '14:15',
                        }
                    }
                ]
            }]
    )
});

app.listen(process.env.PORT || 8081);