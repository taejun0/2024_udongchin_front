import { getRandomCoordinateForDong } from "@utils/coordinateUtils";

export const mockLocations = [
  {
    imageUrl: "/images/Sengtae/squrrel.png",
    title: "다람쥐",
    subtitle:"포유강 / 설치목 / 다람쥐속",
    mode: "생태 지도",
    time: "주로 낮, 아침, 저녁",
    eat: "도토리, 견과류, 씨앗, 열매, 작은 곤충 등",
    live: "산림 지역, 공원, 녹지 공간 등 나무가 많은 곳",
    with: "다람쥐를 위해 길가의 열매를 함부로 줍지 말아주세요!",
    location: getRandomCoordinateForDong("서울특별시 성북구 삼선동2가") || ["37.5605", "126.9911", "서울특별시 성북구 삼선동2가"],
  },
  {
    imageUrl: "/images/Sengtae/ohSorry.jpeg",
    title: "오소리",
    subtitle:"족제비과 / 오소리속 / 식육목",
    mode: "생태 지도",
    time: "주로 야행성",
    eat: "곤충, 지렁이, 뿌리, 과일",
    live: "산림, 초원, 하천 근처",
    with: "오소리는 땅을 파며 사는 동물이에요. 이에 서식지의 안정성을 유지하고 도로와의 충돌을 피하는 것이 중요해요.",
    location: getRandomCoordinateForDong("서울특별시 성북구 삼선동2가") || ["37.5605", "126.9911", "서울특별시 성북구 삼선동2가"],
  },
  {
    imageUrl: "/images/Sengtae/Gosum.jpg",
    title: "고슴도치",
    subtitle:"고슴도치과 / 고슴도치속 / 진무맹장목",
    mode: "생태 지도",
    time: "야행성",
    eat: "곤충, 작은 무척추동물, 과일",
    live: "산림, 초원, 공원, 정원",
    with: "고슴도치는 민감한 동물이에요. 귀여워도 다가가지 말아주세요.",
    location: getRandomCoordinateForDong("서울특별시 성북구 삼선동2가") || ["37.5605", "126.9911", "서울특별시 성북구 삼선동2가"],
  },
  {
    imageUrl: "/images/Sengtae/Frog.jpg",
    title: "청개구리",
    subtitle:"양서류 / 개구리속 / 다람쥐목",
    mode: "생태 지도",
    time: "야행성",
    eat: "작은 곤충, 벌레, 나방",
    live: "습지, 연못, 하천 근처",
    with: "농약이나 화학 물질이 물에 유입되지 않도록 관리하고, 길을 건너는 개구리를 마주칠 경우 조심해야 해요.",
    location: getRandomCoordinateForDong("서울특별시 성북구 삼선동2가") || ["37.5605", "126.9911", "서울특별시 성북구 삼선동2가"],
  },
  {
    imageUrl: "/images/Sengtae/nabi.jpg",
    title: "애호랑나비",
    subtitle:"곤충 / 호랑나비속 / 나비목",
    mode: "생태 지도",
    time: "낮",
    eat: "꽃의 꿀, 식물의 꽃가루",
    live: "고산지대, 풀밭, 산림",
    with: "서식지가 매우 제한적이고 민감하므로, 농약이나 화학 물질이 서식지에 영향을 미치지 않도록 주의해야 해요.",
    location: getRandomCoordinateForDong("서울특별시 성북구 삼선동2가") || ["37.5605", "126.9911", "서울특별시 성북구 삼선동2가"],
  },
  {
    imageUrl: "/images/Sengtae/bird_cham.jpg",
    title: "참새",
    subtitle:"조류 / 참새속 / 참새목",
    mode: "생태 지도",
    time: "낮",
    eat: "씨앗, 곤충, 작은 과일",
    live: "농촌, 도시, 주택가, 정원",
    with: "도심 속에서도 둥지를 틀 수 있는 안전한 장소가 필요하며, 건물 주변에서의 위험 요소를 줄여야 해요.",
    location: getRandomCoordinateForDong("서울특별시 성북구 삼선동2가") || ["37.5605", "126.9911", "서울특별시 성북구 삼선동2가"],
  },
  {
    imageUrl: "/images/Sengtae/bird_park.jpg",
    title: "박새",
    subtitle:"조류 / 박새속 / 참새목",
    mode: "생태 지도",
    time: "낮",
    eat: "곤충, 씨앗, 과일",
    live: "숲, 정원, 공원",
    with: "나무나 덤불을 자주 찾는 박새가 서식할 수 있도록 환경을 보호하고, 정원에서 화학 비료나 농약 사용을 줄여주세요.",
    location: getRandomCoordinateForDong("서울특별시 성북구 삼선동2가") || ["37.5605", "126.9911", "서울특별시 성북구 삼선동2가"],
  },
];

export const mockLocation = [
  {
    id: 1,
    nickname: "이름1",
    title: "Q&A 게시물 제목",
    content: "Q&A 게시물 내용",
    type: "실시간",
    imageUrl: "/images/adding_dots.svg",
    likesCount: 45,
    commentCount: 5,
    urgent: false,
    mode: "실시간 Q&A",
    createdAt: "2024-10-29T12:34:56",
    comments: [],
    locations: [
      "37.5665",
      "126.9780",
      "서울특별시 중구 필동3가"
    ],
  },
]