export const initialState =
{
  'banner' :[
    {
      'id' : 1,
      "title1": '내일배움카드로',
      "title2": '클래스 무료 수강하세요',
      "subTitle1": `2023년 K-디지털 기초역량훈련은`,
      "subTitle2": `오픈 준비중입니다!`,
      "img": `../img/banner/1.png`,
      "color":'#F33B52'
   },
   {
      'id' : 2,
      "title1": `평생교육바우처로`,
      "title2": `1년 동안 무료 수강하기!`,
      "subTitle1": `평생교육 희망카드로`,
      "subTitle2": `연간 구독 결제가 가능해요!`,
      "img": `../img/banner/2.png`,
      "color":'#3360FF'
    },
    {
      'id' : 3,
      "title1": `LOVERS #1`,
      "title2": `이연이라는 잭팟`,
      "subTitle1": `2‘이연’으로 어디까지 갈 수 있을까`,
      "subTitle2": ``,
      "img": `../img/banner/3.png`,
      "color":'#502822'
    },
    {
      'id' : 4,
      "title1": `내 취향을 담은`,
      "title2": `나만의 라이프스타일`,
      "subTitle1": `지금 당신에게 딱 맞는 클래스를 찾다`,
      "subTitle2": `‘발견가이드’`,
      "img": `../img/banner/4.png`,
      "color":'#52187D',
    },
  ],
  'event' :[],
  'popularity' :{

  },
  'recent' :[],

}



for(let i = 1; i <= 20; i++){
  initialState.event.push({
    'id' : i,
    "title": `게임업계에 관심이 있다면`,
    "subTitle": `상시 이벤트`,
    "img": `../img/recent/${i}.png`
  })
}

for(let i = 1; i <= 20; i++){
  initialState.recent.push({
    'id' : i,
    "category": `그래픽디자인・이루리`,
    "title": `2023년, 평생 떨어질 일 없는 자존감 상위 1%되는 법!`,
    "img": `../img/recent/${i}.png`,
    'like': Math.ceil(Math.random()*10000),
    'good': Math.ceil(Math.random()*100),
  })
}