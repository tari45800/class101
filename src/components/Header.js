import styled from "styled-components";

const HeaderContainer = styled.div`
  position: relative;
  max-width: 1216px;
  margin: 0 auto;
  padding: 0 20px;
  border: 2px solid black;

  .topHeader{
    width: 100%;
    display: flex;
    align-items: center;
    height: 78px;
    border: 2px solid blue;

    h1{
    }
    
    & > div{
      display: inline-block;
    }

    .responsiveDiv{
      display: flex;
      border: 2px solid blue;

      input{
        width: 380px;
      }
    }

    .infoDiv{
      display: flex;
      border: 2px solid blue;

      span{
        margin-left: 12px;
      }
    }
  }

  .bottomHeader{
    width: 100%;
    div{
      height: 44px;
      line-height: 44px;
      border: 2px solid red;
    }

  }

`

function Header() {
  return(
    <>
      <HeaderContainer className="headerBG">
        <div className="headerMain">
          <div className="topHeader">
            <h1>CLASS101</h1>
            <div className="responsiveDiv">
              <span>구독</span>
              <span>스토어</span>
              <input type='text' placeholder="찾으시는 취미가 있나요"></input>
            </div>
            <div className="infoDiv">
              <span>크리에이터 지원</span>
              <span>기업교육</span>
              <span>내 클래스</span>
              <span>하트</span>
              <span>쿠폰</span>
              <span>프로필</span>
            </div>
          </div>

          <div className="bottomHeader">
            <div>
              <span>전체 카테고리</span>
              <span>101 아카데미</span>
              <span>이벤트</span>
            </div>
          </div>
        </div>
      </HeaderContainer>
    </>
  )
}

export default Header;