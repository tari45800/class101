import styled from "styled-components";
const ItemContainer = styled.div`
    width: 25%;
    display: inline-block;
    padding: 20px 12px;

  .itemContainer{

    img{
      width: 100%;
      aspect-ratio: 4/3;
      object-fit: cover;
    }

    .itemInfo{
      .category{
        display: block;
        font-size: 0.7rem;
        font-weight: bold;
        margin: 6px 0;
      }
      .title{
        font-size: 0.9rem;
      }

      .spanDiv1 span{
        display: inline-block;
        margin: 10px 0;
        margin-right: 7px;
        font-size: 0.7rem;
        color: #aaa;
      }

      .spanDiv2{
        border-top: 1px solid #eee;
        padding-top: 10px;
      }

      .spanDiv2 span{
        font-size: 0.7rem;
      }

      .spanDiv2 span:nth-of-type(2){
        margin-left: 5px;
        color: red;
      }

    }
  }

  @media (max-width:1024px) {
    width: 50%;
  }
`


function Item({props}) {



  return(
    <ItemContainer>
      <div className="itemContainer">
        <img src={props.img}></img>
        <div className="itemInfo">
          <span className="category">{props.category}</span>
          <span className="title">{props.title}</span>
          <div className="spanDiv1">
            <span>하트{props.like}</span>
            <span>따봉{props.good}%</span>
          </div>
          <div className="spanDiv2">
            <span>미션 답변 작성</span>
            <span>16시간 전</span>
          </div>
         </div>
      </div>
    </ItemContainer>
  )
}

export default Item;