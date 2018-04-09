const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/stop/index', (req, res) => {
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

app.get('/schedule/index', (req, res) => {
    res.send(
        [
            {
                id: '5ab878b63fc038833137a051',
                title: '1:ЧЛФЗ "АВРОРА" - САНАТОРІЙ "УКРАЇНА"',
                directions: [
                    {
                        title: 'ЧЛФЗ "АВРОРА" - САНАТОРІЙ "УКРАЇНА"',
                        stops: [
                            { stop: {id: '5ab878b63fc038833137a051', title: 'ЧЛФЗ "Аврора"'}, time: '10:00'},
                            { stop: {id: '5ab878b6852bf09243009759', title: 'завод "Хімреактив"'}, time: '10:05'},
                            { stop: {id: '5ab878b6df3ed2cb2365e4b5', title: 'ДОК'}, time: '10:08'},
                            { stop: {id: '5ab878b67bd5a7e68501f425', title: 'Консервний комбінат'}, time: '10:12'},
                            { stop: {id: '5ab878b63dfe99a16f230cc8', title: 'Хлібозавод'}, time: '10:15'},
                            { stop: {id: '5ab878b6810bccb32d10d61d', title: 'вул. Добровольського'}, time: '10:18'},
                            { stop: {id: '5ab878b6baf76a9f607c243c', title: 'пл. 700-річчя Черкас'}, time: '10:23'},
                            { stop: {id: '5ab878b68527e29fb495bd02', title: 'Університет'}, time: '10:27'},
                            { stop: {id: '5ab878b612f6e68fc6743947', title: 'DEPO\'t center'}, time: '10:35'},
                            { stop: {id: '5ab878b61f67bb3153935ab7', title: 'вул. Юрія Іллєнка'}, time: '10:40'},
                            { stop: {id: '5ab878b6d2bd4ae22b4a78fe', title: 'вул. Новопречистенська'}, time: '10:45'},
                            { stop: {id: '5ab878b6a0e3314b75764ae7', title: 'вул. Кривалівська'}, time: '10:50'},
                            { stop: {id: '5ab878b649f09f24d1fbc955', title: 'вул. Пастерівська'}, time: '10:55'},
                            { stop: {id: '5ab878b6ad20f7776db0ab70', title: 'пл. Богдана Хмельницького'}, time: '11:00'},
                            { stop: {id: '5ab878b60afbf3b6e4fef886', title: 'Будинок Торгівлі'}, time: '11:10'},
                            { stop: {id: '5ab878b6a0ecbeaabade80ab', title: 'Драмтеатр'}, time: '11:15'},
                            { stop: {id: '5ab878b698d7a7d6d5b9f3c3', title: 'пл. Соборна'}, time: '11:20'},
                            { stop: {id: '5ab878b6b3f78c92e5b0b8cd', title: 'пл. Слави'}, time: '11:25'},
                            { stop: {id: '5ab878b61d44559ab4f0639d', title: 'вул. Пушкіна'}, time: '11:30'},
                            { stop: {id: '5ab878b605f1c8800263cb3d', title: 'Університет'}, time: '11:35'},
                            { stop: {id: '5ab878b626500f5659aa7ca8', title: 'вул. Кирилова (на вимогу)'}, time: '11:40'},
                            { stop: {id: '5ab878b6c245253bf24dc9e4', title: 'вул. Казбетська'}, time: '11:45'},
                            { stop: {id: '5ab878b63669a4ee3cbd4127', title: 'вул. Можайського'}, time: '11:50'},
                            { stop: {id: '5ab878b60f4170f14109836f', title: 'Агропроммеханізація'}, time: '11:55'},
                            { stop: {id: '5ab878b69e11f3fca04a10ce', title: 'Міська лікарня №1'}, time: '12:00'},
                            { stop: {id: '5ab879a8d38d80a26868ac08', title: 'санаторій "Україна"'}, time: '12:05'}
                        ]
                    },
                    {
                        title: 'САНАТОРІЙ "УКРАЇНА" - ЧЛФЗ "АВРОРА"',
                        stops: [
                            { stop: {id: '5ab879a8d38d80a26868ac08', title: 'санаторій "Україна"'}, time: '12:10'},
                            { stop: {id: '5ab878b6ac7fc198a05f0493', title: 'Автошкола "Богдан"'}, time: '12:15'},
                            { stop: {id: '5ab878b6fa36a8a51769f5c8', title: 'Міська лікарня №2'}, time: '12:20'},
                            { stop: {id: '5ab878b6fad496e62dc66b47', title: 'Лісгосп'}, time: '12:25'},
                            { stop: {id: '5ab878b6eec9b1e5985ec77f', title: 'м/н Соснівка'}, time: '12:30'},
                            { stop: {id: '5ab878b6a125356b87d2e31d', title: 'Обласна лікарня'}, time: '12:35'},
                            { stop: {id: '5ab878b69e11f3fca04a10ce', title: 'Міська лікарня №1'}, time: '12:40'},
                            { stop: {id: '5ab878b60f4170f14109836f', title: 'Агропроммеханізація'}, time: '12:45'},
                            { stop: {id: '5ab878b63669a4ee3cbd4127', title: 'вул. Можайського'}, time: '12:50'},
                            { stop: {id: '5ab878b605f1c8800263cb3d', title: 'Університет'}, time: '12:55'},
                            { stop: {id: '5ab878b626500f5659aa7ca8', title: 'вул. Кирилова (на вимогу)'}, time: '13:00'},
                            { stop: {id: '5ab878b61d44559ab4f0639d', title: 'вул. Пушкіна'}, time: '13:05'},
                            { stop: {id: '5ab878b6c245253bf24dc9e4', title: 'вул. Казбетська'}, time: '13:10'},
                            { stop: {id: '5ab878b6b3f78c92e5b0b8cd', title: 'пл. Слави'}, time: '13:15'},
                            { stop: {id: '5ab878b698d7a7d6d5b9f3c3', title: 'пл. Соборна'}, time: '13:20'},
                            { stop: {id: '5ab878b6a0ecbeaabade80ab', title: 'Драмтеатр'}, time: '13:25'},
                            { stop: {id: '5ab878b60afbf3b6e4fef886', title: 'Будинок Торгівлі'}, time: '13:30'},
                            { stop: {id: '5ab878b6ad20f7776db0ab70', title: 'пл. Богдана Хмельницького'}, time: '13:35'},
                            { stop: {id: '5ab878b649f09f24d1fbc955', title: 'вул. Пастерівська'}, time: '13:40'},
                            { stop: {id: '5ab878b6a0e3314b75764ae7', title: 'вул. Кривалівська'}, time: '13:45'},
                            { stop: {id: '5ab878b6d2bd4ae22b4a78fe', title: 'вул. Новопречистенська'}, time: '13:50'},
                            { stop: {id: '5ab878b67bd5a7e68501f425', title: 'Консервний комбінат'}, time: '13:55'},
                            { stop: {id: '5ab878b6df3ed2cb2365e4b5', title: 'ДОК'}, time: '14:00'},
                            { stop: {id: '5ab878b6852bf09243009759', title: 'завод "Хімреактив"'}, time: '14:05'},
                            { stop: {id: '5ab878b63fc038833137a051', title: 'ЧЛФЗ "Аврора"'}, time: '14:10'}
                        ]
                    }
                ]
            }]
    )
});

app.get('/import/index', (req, res) => {
    res.send([
        {id: '5ab878b63fc038833137a051', version: '2018-02-23', filename: 'розклад_2018_02.xlsx', routes_count: 15, state: 'draft'},
        {id: '5ab878b6852bf09243009759', version: '2018-02-15', filename: 'розклад_2018_02.xlsx', routes_count: 12, state: 'active'},
        {id: '5ab878b6df3ed2cb2365e4b5', version: '2018-02-02', filename: 'розклад_2018_02.xlsx', routes_count: 12, state: 'past'}
    ])
});

app.listen(process.env.PORT || 8081);