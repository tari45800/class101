import styled from "styled-components";

const HeaderContainer = styled.div`
  section{
    position: sticky;
    top: 0;
    border: 2px solid red;
  }

  header{
    width: 100%;
    border: 2px solid black;
  }

  .headerTopContainer{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .headerTopResponsive{
    display: flex;
    /* align-items: stretch;
    flex-direction: column; */
    width: 100%;
    max-width: 1216px;
    padding: 0 20px;
    border: 2px solid red;
  }

  .divContainer{
    display: flex;
    align-items: center;
    width: 100%;
    border: 2px solid blue;
    
    & > a{
      color: black;
      font-size: 1.5rem;
      font-weight: bold;
    }

    & > .space{
      width: 36px;
    }
  }

  .searchContainer{
    display: flex;
    flex: 1;
    border: 2px solid red;
  }

  .searchBox{
    display: flex;
    align-items: center;

    & > .space{
      width: 16px;
    }
  }

  .searchWindowContainer{
    display: flex;
    align-items: center;
    border: 2px solid blue;

  }

  .searchWindow{
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    border: 1px solid #E5E5E5;
    border: 2px solid red;
  }

  .searchDiv{
    display: flex;
    height: 38px;
    padding-left: 16px;
    padding-right: 10px;
    align-items: center;

    & > span{
      display: block;
      width: 20px;
      height: 20px;
      border: 2px solid red;
    }
  }


`

function Header() {
  return(
    <>
      <HeaderContainer>
        <section className="headerContainer">
          <header>
            <div className="headerTopContainer">
              <div className="headerTopResponsive">
                <div className="divContainer">
                  <a href="" className="title">CLASS101</a>
                  <div className="space"></div>
                  <div className="searchContainer">
                    <div className="searchBox">
                      <a href="">구독</a>
                      <div className="space"></div>
                      <a href="">스토어</a>
                      <div className="space"></div>
                    </div>
                    <div className="searchWindowContainer">
                      <div className="searchWindow">
                        <div className="searchDiv">
                          <p>찾으시는 취미가 있나요</p>
                          <span>돋보기</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info">
                    <div className="infoContainer">
                      <div className="infoBox">
                        <a href="">크리에이터 지원</a>
                        <a href="">기업교육</a>
                        <a href="">내 클래스</a>
                      </div>
                      <a href="">하트</a>
                      <a href="">이벤트</a>
                      <div>
                        <div>프로필</div>
                        <span>화살표</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <nav></nav>
        </section>
      </HeaderContainer>
    </>
  )
}

export default Header;