import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Item from "./Item";

const RecentContainer = styled.div`
  margin-top: 100px;

  .RecentContainer{
    max-width: 1216px;
    padding: 0 8px;
    margin: 0 auto;
  }

  .listTitle{
    padding: 0 12px;
  }

  h1{
    font-size: 1.5rem;
    font-weight: bold;
  }

  h2{
    margin: 10px 0;
    color: #aaa;
  }

  @media (max-width:1024px) {
    margin-top: 50px;

    h1{
      font-size: 1.2rem;
    }
    h2{
      font-size: 0.8rem;
      margin: 5px 0;
    }
  }

`

function RecentCalss() {

  const state = useSelector(state => state.itemReducer);
  const { recent } = state;

  return(
    <RecentContainer>

      <div className="RecentContainer">
        <div className="listTitle">
          <h1>최근 업데이트 클래스</h1>
          <h2>크리에이터가 최근 활동한 클래스예요</h2>
        </div>
        {recent.map((el,idx) => <Item props={recent[idx]}></Item>)}
      </div>
    </RecentContainer>
  )
}

export default RecentCalss;