import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";

const BannerContainer = styled.div`
  height: 423px;
  background-color: ${props => props.bGColor};
  transition: 0.3s;

  .bannerContainer{
    max-width: 1216px;
    padding: 0 20px;
    margin: auto;
    display: flex;
    padding-top: 34px;
  }  
  
  .banners{
    max-width: 676px;
    aspect-ratio: 16/9.5;
    overflow: hidden;
    border-radius: 3px;

    box-shadow: 0 0 10px rgb(0,0,0,0.1);

    div{
      position: relative;
      left: -${props => props.currentBanner*696}px;
      display: flex;
      transition: 0.5s ease;

      img{
        max-width: 676px;
        aspect-ratio: 16/9.5;
        object-fit: cover;
        border-radius: 3px;
        margin-right:20px;
      }
    }
  }

  .bannerInfo{
    min-width: 300px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;

    .bannerTitle{
      div:nth-of-type(1){
        margin-bottom: 10px;
      }

      div:nth-of-type(1) span{
        display: block;
        font-size: 1.8rem;
        font-weight: bold;
        color: white;
        line-height: 2.4rem;
      }

      div:nth-of-type(2) span{
        display: block;
        color: rgb(250,250,250,0.6);
        line-height: 1.5rem;
      }
    }

    .bannerNav{
      display: flex;
      align-items: center;

      .bannerPage{
        font-size: 0.8rem;
        font-weight: bold;
        color: white;
        margin-right: 20px;
      }

      div{
        flex: 1;
        border-top: 1px solid white;
      }

      .bannerBtn{
        font-size: 1.8rem;
        margin-left: 20px;
        color: white;
        cursor: pointer;
      }

    }

  }


`

function Banner() {

  //전역관리 변수
  const state = useSelector(state => state.itemReducer);
  const { banner } = state;

  //현재페이지 관리 state
  const [currentBanner, setCurrentBanner] = useState(0)

  //현재페이지 변경 함수
  const changeBanner = (e) =>{
    if(currentBanner+e > 3){
      setCurrentBanner(0)
      return;
    } else if(currentBanner+e <= -1){
      setCurrentBanner(3)
      return;
    }

    setCurrentBanner(currentBanner+e)
  }

  return(
    <BannerContainer currentBanner={currentBanner} banner={banner} bGColor={banner[currentBanner].color}>
      <div className="bannerContainer">
        <div className="banners">
          <div>
            {banner.map((el, idx) => {
              return <img key={idx} src={banner[idx].img} alt={banner[idx].title} />
            })}
          </div>
        </div>
        <div className="bannerInfo">
          <div className="bannerTitle">
            <div>
              <span>{banner[currentBanner].title1}</span>
              <span>{banner[currentBanner].title2}</span>
            </div>
            <div>
              <span>{banner[currentBanner].subTitle1}</span>
              <span>{banner[currentBanner].subTitle2}</span>
            </div>
          </div>
          <div className="bannerNav">
            <span className="bannerPage">0{currentBanner+1} | 0{banner.length}</span>
            <div></div>
            <span className="bannerBtn" name={true} onClick={()=>{changeBanner(-1)}}>&lt;</span>
            <span className="bannerBtn" name={false} onClick={()=>{changeBanner(1)}}>&gt;</span>
          </div>
        </div>
      </div>
    </BannerContainer>
  )
}

export default Banner;