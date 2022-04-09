Next js 환경에 typescript 적용하기 : https://velog.io/@taeung/COINSS-Next.js%EC%99%80-TypeScript-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0

/pages/_document.tsx 사용하는 이유
- next js에서는 styled-component가 적용이 안되는 경우가 있는데, 이는 SSR 때문이라고 함. 
- styled-component를 적용시키기 위해 /pages/_document.tsx를 사용.
- /pages/_document.tsx파일은 SSR렌더링 할 때만 호출된다고함.
