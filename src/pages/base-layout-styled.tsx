import styled from 'styled-components';

export const ROOT = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    align-items: center;
    width: 100%;
    height: 58px;
    display: flex;
    justify-content: flex-start;
    background: #2b3d5fbf;
    .header-left {
      width: 260px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 58px;
      }
      span {
        color: white;
        font-size: 15px;
      }
    }
    .header-center {
      flex: 1;
      text-align: left;
      color: white;
      & .canvas-operate {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        & .operate-item {
          width: 48px;
          text-align: center;
          background: cadetblue;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
    .header-right {
      width: 80px;
    }
  }
  .content {
    flex: 1;
    display: flex;
    .content-left {
      width: 340px;
      display: flex;
      flex-direction: column;
      background-color: #e7e1f1;
      .material-title {
        text-align: center;
        height: 48px;
        line-height: 48px;
      }
    }
    .content-center {
      background: -webkit-linear-gradient(top, transparent 35px, #eaeaea 36px),
        -webkit-linear-gradient(left, transparent 35px, #eaeaea 36px);
      background-size: 36px 36px;
      flex: 1;
      width: 100%;
    }
    .content-right {
      width: 300px;
      background-color: #e7e1f1;
    }
  }
`;
