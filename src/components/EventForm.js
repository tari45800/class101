import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";

const EventContainer = styled.div`
  position: relative;
  margin-top: 100px;

  .eventContainer{
    max-width: 1216px;
    padding: 0 20px;
    margin: 0 auto;

    .eventTitle{
      width: 100%;
      display: flex;
      align-items: baseline;
      justify-content: space-between;

      h1{
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 30px;
      }

      span{
        color: #aaa;
      }
    }

  }

  .eventWindow{
    overflow: hidden;

    .eventBanners{
      position: relative;
      left: calc(((-1176px + (376px * 3)) / 2 - 376px) * ${props => props.currentEvent});
      display: flex;
      gap: calc((1176px - (376px * 3)) / 2);
      transition: 0.4s;

      .eventBanner{
        max-width: 376px;
        display: inline-block;
      }

      img{
        max-width: 376px;
        aspect-ratio: 16/9.5;
        object-fit: cover;
        border-radius: 3px;
      } 

      h1{
        font-weight: bold;
        font-size: 0.9rem;
        margin: 13px 0 3px 0
      }
      span{
        font-size: 0.7rem;
      }

    }
  }



  .eventBtn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1260px;
    display: flex;
    justify-content: space-between;

    span{
      cursor: pointer;
      font-size: 1.5rem;
    }
  }
`

function EventForm() {
  const state = useSelector(state => state.itemReducer);
  const { event } = state;

  //현재페이지 관리 state
  const [currentEvent, setCurrentEvent] = useState(0)

  //현재페이지 변경 함수
  const changeEvent = (e) =>{
    if(currentEvent+e >= 18){
      return;
    } else if(currentEvent+e <= -1){
      return;
    }

    setCurrentEvent(currentEvent+e)
  }

  return (
    <EventContainer currentEvent={currentEvent}>
    <div className="eventContainer">
      <div className=" eventTitle">
        <h1>진행중인 인기 이벤트</h1>
        <span>전체 이벤트 보기</span>
      </div>

      <div className="eventWindow">
        <div className="eventBanners">
          {event.map((el,idx) => {
            return(
              <div key={idx} className='eventBanner'>
                <img src={el.img}></img>
                <h1>{el.title}</h1>
                <span>{el.subTitle}</span>
              </div>
            ) 
          })}
        </div>
      </div>
    </div>

    <div className="eventBtn">
      <span className="bannerBtn" name={true} onClick={()=>{changeEvent(-1)}}>&lt;</span>
      <span className="bannerBtn" name={false} onClick={()=>{changeEvent(1)}}>&gt;</span>
    </div>
    </EventContainer>
  );
}

export default EventForm;