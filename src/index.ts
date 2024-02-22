// const hello =()=> "hi"

// class Block {
//     constructor(private data:string){}
//     static hello(){
//         return "hi";
//     }
// }

// tsconfig.json 파일에 "lib":["ES6","DOM"]설명하기 위함
// DOM을 포함시키면 그에 따른 자동완성이 됨.
// document.querySelector()
// 위 코드 cmd 누른뒤 클릭하면 lib.dom.d.ts 라는 파일로 이동
// 이는 누군가 JS 라이브러리나 모듈을 타입스크립트가 이해할 수 있도록 모든 타입정의를 해둔 파일이다.
// DOM 을 포함하면 TS가 JS API의 타입을 이해하게 됨.


import {init,exit} from "./myPackage";

// strict 모드를 활성화하면 myPackage에 에러가 나는데
// Could not find a declaration file for module 'myPackage'. 
// declaration file 이란 JS 코드타입을 TS에 설명해주는 파일을 말함 => d.ts 파일을 만들것임

localStorage
// cmd(ctrl) 누르고 localStorage 클릭해 보면 declare 가 많은 lib.dom.d.ts 로 이동하게 되는데
// call signiture 타입의 모음인걸 알 수 있다.
// TS 가 이 d.ts(declaration) 파일을 가지고 있을때 비로소 자동완성이 가능해짐
// TS 는 d.ts 로 가서 해당되는 API에 대한 타입을 찾음
// 개발자들이 일일히 타입을 적은 파일을 만든것임 => 우리도 적어보자

// 우리도 myPackage.js 에 대해 d.ts 파일을 만들어 볼 것임
// 1. src 폴더에 myPackage.d.ts 파일 만들어서 
// 2. import 받은 myPackage 모듈 선언해주고,
// 3. 모듈 안에 있는 init 함수의 타입형태를 기술해주기 exit 함수도 마찬가지 => 에러사라짐
// 4. 이제 index.ts 파일에서 init을 적으면 자동완성으로 타입형식 나타남

init({
    url:"true"
})
exit(1)

