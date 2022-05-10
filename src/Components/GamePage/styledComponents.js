import styled from 'styled-components'

export const Container = styled.div`
  background-color: #223a5f;
  height: 100vh;
  font-family: 'Roboto';
`

export const SubContainer = styled.div`
  width: 90%;
  max-width: 1110px;
  margin: auto;
  padding: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //   align-items: center;
  height: 100vh;
`

export const ScoreCard = styled.div`
  display: flex;
  color: #ffffff;
  font-family: 'Bree Serif';
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #fff;
  padding: 4px 30px;
  border-radius: 12px;
  //   margin-top: 30px;
`

// export const NamesList = styled.ul`
//   padding: 0px;
// `

export const Score = styled.div`
  background-color: #fff;
  border-radius: 8px;
  color: #223a5f;
  padding: 20px;
`

// export const Name = styled.li`
//   list-style-type: none;
//   font-size: 22px;
// `
export const ChoiceContainer = styled.div`
  width: 400px;
  text-align: center;
  align-self: center;
`

export const ResultContainer = styled.div`
  text-align: center;
  align-self: center;
`

export const Choice = styled.img`
  height: 160px;
  margin: 0 10px;
`

export const PopupContainer = styled.div`
  align-self: flex-end;
`

export const Button = styled.button`
  color: #223a5f;
  background-color: #fff;
  border: 0;
  font-family: 'Bree Serif';
  font-size: 16px;
  padding: 6px;
  width: ${props => (props.width ? 120 : 80)}px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
`
export const Heading = styled.h1`
  color: #fff;
  margin: ${props => (props.margin ? 15 : 0)}px;
  font-size: ${props => (props.size ? 22 : 20)}px;
`
export const ResultText = styled.p`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
`
