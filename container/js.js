// let array =['Vasya','lesha','Ivan']
// array.push('max')
// array.unshift('Oleg')
// console.log(array)

// for(let x=0;x<array.length;x++){
//     console.log(array[x])
// }

// let object = {
//     id:1,
//     name:'Nastya',
//     birthday:'01.02.2001'
// }
// console.log(object.id)
// for(let key in object){
//     console.log(object[key])
// }

// let users=[
//     {
//         id:1,
//         name:'Nastya',
//         birthday:'01.02.2001'
//     },
//     {
//         id:2,
//         name:'Nastya',
//         birthday:'01.02.2001'
//     },
//     {
//         id:3,
//         name:'Nastya',
//         birthday:'01.02.2001'
//     }
// ]
// console.log(users[1].name)
// usersPlace=document.querySelector('.users')
// users.forEach(element => {
//     console.log(element.name)
//     html=`<h3>${element.name}</h3>`
//     userPlace.innerHTML += html 
// })

const title = document.querySelector('.title')
const date = document.querySelector('.date')
const text = document.querySelector('.text')
const name = document.querySelector('.name')
const id = document.querySelector('.id')

let news = document.querySelector('.block');

let user=[
    {
        id:1,
        name: 'На Ямале спасли замерзшую сову',
        text: 'Особь ястребиной совы заметили прохожие под припаркованным автомобилем. Годовалая птица была слаба и примерзла ко льду, ее доставили в приют для животных "Друг", где нового постояльца осмотрели специалисты центра ветеринарии.',
        author:'Олег',
        date:'02.01.2023'

    },
    {
        id:2,
        name: 'В музее Есенина в Москве нашлась украденная кошка Катя',
        text: 'В Московском государственном музее С. А. Есенина нашлась кошка Катя, которую украли 25 мая, рассказала РИА Новости пресс-секретарь учреждения Любовь Курьянова.',
        author:'Юра',
        date:'03.03.2024'

    },
    {
        id:3,
        name: 'В Москве 50 животных выпустили после реабилитации в Центре передержки',
        text: ' Более 50 животных выпустили в естественную среду обитания после реабилитации в Центре передержки диких животных, сообщили в Telegram-канале комплекса городского хозяйства Москвы.',
        author:'Оля',
        date:'02.04.2023'

    },
    {
        id:4,
        name: 'На Ямале сотрудники Московского зоопарка спасли белого медведя',
        text: 'В начале сентября животное стало выходить к оленеводческим поселениям в Ямальском районе ЯНАО, разорило чум оленевода, а также напало на тундровиков. Специалисты Московского зоопарка и Росприроднадзор приняли решение перевезти медведя в природную среду подальше от места стоянки оленеводов, чтобы защитить людей и животное.',
        author:'Нана',
        date:'08.05.2023'

    },
    {
        id:5,
        name: 'Самка дальневосточного леопарда, подопечная Памелы Андерсон, стала бабушкой',
        text: 'ВЛАДИВОСТОК, 10 сен — РИА Новости. Дальневосточный леопард Памела, которую опекает голливудская актриса Памела Андерсон, в третий раз стала бабушкой, рассказал в интервью РИА Новости на ВЭФ директор нацпарка "Земля леопарда" Виктор Бардюк.',
        author:'Ислам',
        date:'07.06.2023'

    },
]


for(let i=1; i<user.length; i++){
    news.insertAdjacentHTML('beforeend', `
    
        <div class="block1">

            <div class="mini-block">

                <div class="title">` + user[i]['name'] + `</div>
                <div class="date">` + user[i]['date'] + `</div>

            </div>

            <p class="text">` + user[i]['text'] + `</p>
        
            <div class="mini-block1">
        
                <p class="name">` + user[i]['author'] + `</p>
                <p class="id">` + user[i]['id'] + `</p>
        
            </div>

        </div>
    `)
}


