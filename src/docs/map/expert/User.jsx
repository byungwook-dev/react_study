import React, { useState } from "react";

const User = ({ user }) => {
  console.log(user);
  const { id, age, name, phone, address } = user;
  // Users의 Props를 받아서 아래 내용들을 실습
  // 1) 유저의 데이터 중 경기도에 거주하는 사람의 데이터만 태그로 출력
  // console.log(address.includes("경기도"))
  // const userAddress = address.includes("경기도") ? (
  //   <li>
  //     <p>아이디 : {id}</p>
  //     <p>이름 : {name}</p>
  //     <p>나이 : {age}</p>
  //     <p>전화번호 : {id}</p>
  //     <p>주소 : {address}</p>
  //   </li>
  // ) : (<></>);
  // 2) 유저의 데이터 중 나이가 20보다 큰 사람의 정보를 화면에 태그로 출력
  // const userAge = age > 20 ? (
  //   <li>
  //     <p>아이디 : {id}</p>
  //     <p>이름 : {name}</p>
  //     <p>나이 : {age}</p>
  //     <p>전화번호 : {id}</p>
  //     <p>주소 : {address}</p>
  //   </li>
  // ) : (<></>);
  // 3) 강남구의 사는 사람의 이름을 태그로 출력
  // const userTask = address.includes("강남구") ? (
  //   <li>
  //     <h2>강남구에 사는 사람</h2>
  //     <p>이름 : {name}</p>
  //   </li>
  // ) : (<></>);

  // 4) 모든 핸드폰 번호를 010-1234-5678로 변경해서 태그로 출력
  
  // const [userPhone, setUserPhone] = useState(phone);
  
  // const onclickToPhoneNumber = () => {
    //   setUserPhone("010-1234-5678");
    // };
  
  // 5) 장보고의 주소를 서울시 중랑구로 변경해서 태그로 출력
    
  const [userAddress, setUserAddress] = useState(address);

  const onclickToAddress = () => {
    if (name === "장보고") {
      setUserAddress("서울시 중랑구")
    }
  }
    return (
      <ul>
        <li>
          <p>아이디 : {id}</p>
          <p>이름 : {name}</p>
          <p>나이 : {age}</p>
          <p>전화번호 : {phone}</p>
          <p>주소 : {userAddress}</p>
        </li>
        <button onClick={onclickToAddress}>주소 변경</button>        
      </ul>
    );
  };
  
  export default User;
