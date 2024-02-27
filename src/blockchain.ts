// 블록체인 만들기 - NodeJS 앱
// 노마드 코드 타입스크립트 5.5-5.8 강의 듣고 완성해야하는데...챌린지에 포함 안되서 하다 맘
// Module '"crypto"' has no default export. * as 추가해주면 에러 사라짐
// 아님tsconfig.json 파일에 "esModuleInterop":true, 추가
// import crypto from "crypto";
// //npm i -D @types/node 명령어로 설치하지 않아도 crypto 모듈에 대한 오류가 뜨지않는건 이미 crypto에 대한 타입이 정의 되어있다고 봐도 될까요?
// //최신 노드 모듈(18.17.1)을 사용하면 @types\node 가 포함되어있고 그 폴더 안에 crypto.d.ts가 들어있어서 굳이 "npm i -D @types/node" 안 해도 됩니다.
// interface BlockShape {
//     hash: string;
//     prevHash:string;
//     height:number;
//     data:string;
// }
// class Block implements BlockShape {
//     // hash 코드는 prevHash,height,data값을 통해 계산해야해서 따로 선언후 수동으로 초기화시키기
//     public hash : string;
//     constructor(
//         public prevHash: string,
//         public height: number,
//         public data: string,
//     ){
//         // hash 별도 초기화 시키면서 static 함수 불러옴
//         // static 함수는 클래스 안에서 사용하는 함수
//         // 클래스 인스턴스 없이도 부를 수 있는 함수 
//         this.hash = Block.calculateHash(prevHash,height,data);
//     }
//     static calculateHash(prevHash:string,height:number,data:string){
//         const toHash = `${prevHash}${height}${data}`
//     }
// }
//NodeJS 패키지 중 하나인 crypto를 이용해 hash 값 만들기