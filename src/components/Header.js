import styled from "styled-components";

const HeaderBG = styled.div`
  position: relative;
  height: 122px;
  background-color: white;
`


const HeaderContainer = styled.div`
  position: sticky;
  border-bottom: 1px solid #eee;
  
  .headerContainer{
    max-width: 1216px;
    padding: 0 20px;
    margin: auto;
  }

  .mainHeader{
    display: flex;
    align-items: center;
    height: 78px;

    .title, .rightHeader > span{
      font-size: 1.2rem;
      font-weight: bold;
      margin-right: 20px;
    }

    .rightHeader{
      display: flex;
      align-items: center;
      flex: 1;
      

      .searchContainer{
        flex: 1;

        & > div{
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 380px;
          height: 38px;
          padding: 0 10px 0 16px;
          background-color: #eee;

          span{
            font-size: 0.9rem;
            color: #aaa;
          }
        }
      }
    }

    .leftHeader{
      display: flex;

      span{
        font-size: 0.9rem;
        margin-left: 20px;
      }
      .info{

      }
    }
  }

  .nav{
    display: flex;
    align-items: center;
    height: 44px;
    span{
      font-weight:bold;
      margin-left: 30px;
      cursor: pointer;
    }
  }
 
`

function Header() {
  return(
    <>
      <HeaderBG>
        <HeaderContainer>
          <div className="headerContainer">
            <div className="mainHeader">
              <h1 className="title">CLASS101</h1>
              <div className="rightHeader">
                <span>구독</span>
                <span>스토어</span>
                <div  className="searchContainer">
                  <div>
                    <span>찾으시는 취미가 있나요?</span>
                    <span>Q</span>
                  </div>
                </div>
              </div>
              <div className="leftHeader">
                <span>크리에이터 지원</span>
                <span>기업교육</span>
                <span>내 클래스</span>
                <span>하트</span>
                <span>이벤트</span>
                <div className="info">
                  <img src=""></img>
                  <span>화살표</span>
                </div>
              </div>
            </div>

            <div className="nav">
              <span>전체 카테고리</span>
              <span>101 아카데미</span>
              <span>이벤트</span>
            </div>
          </div>
        </HeaderContainer>
      </HeaderBG>
    </>
  )
}

export default Header;