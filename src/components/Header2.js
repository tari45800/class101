import styled from "styled-components";

const HeaderContainer = styled.div`

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
                  <a href="" className="title"></a>
                  <div className="space"></div>
                  <div></div>
                  <div></div>
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