
import styled from "styled-components";

export const Header = styled.header`
  background-color: #333;
  height: 80px;
  width: 100%;
  padding: 0 40px;

  align-items: center;
  justify-content: space-between;
 
  color: white;
  display: flex;

`;

export const Nav = styled.nav`

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    margin:0 auto;
   

    li {
      margin-right: 20px;
      font-size: 18px;
    

      a {
        text-decoration: none;
        color: #ff4500;
      
        &.active {
          font-weight: bold;
        }


        &:hover,
        &:focus {
         
          color: white;
        }
      }
    }
  }
`;

export const Main = styled.main`
  padding: 20px;
`;

export const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
`;




