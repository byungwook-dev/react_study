import styled from 'styled-components';
import { OrangeBox, flexCenter, flexCenterColumn } from '../../global/common';
import { fadeIn } from '../../styles/keyframes';

const S = {};

S.StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  border: solid 1px #333;
`

S.StyledButton = styled.button`
  background-color: ${(props)=>props.backgroundColor};
  border: none;
`
S.Input = styled.input`
  width: 200px;
  height: 200px;
  border: solid 1px green;
  color: ${(props)=>props.color};
`

S.Strong = styled.strong`
  font-Size: ${(fontSize) => fontSize};
`
S.P = styled.p`
  font-weight: ${(props) => props?.fontWeight};
`

S.Wrap = styled.div`
  ${flexCenterColumn};

  & span {
    color: green;
  }

  & button{
    width: 100%;
  }
`

S.Box = styled.div`
  ${OrangeBox};
  ${flexCenter};

  & p {
    /* 테마가 정의한 폰트로 폰트 크기를 정의 */
    font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
    font-weight: 900;
    animation: ${fadeIn} 1s forwards ease-in;
  }
`

export default S;
