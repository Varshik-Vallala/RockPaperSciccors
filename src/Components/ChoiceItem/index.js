import {Choice, ChoiceButton} from './styledComponents'

const ChoiceContainer = props => {
  const {eachChoice, chooseChoice} = props
  const {id} = eachChoice

  //   console.log(`${eachChoice.id.toLowerCase()}Button`)

  const clickChoice = () => {
    chooseChoice(id)
  }

  return (
    <ChoiceButton
      data-testid={`${eachChoice.id.toLowerCase()}Button`}
      onClick={clickChoice}
    >
      <Choice src={eachChoice.imageUrl} />
    </ChoiceButton>
    // <ChoiceContainerList>
    //   {choicesList.map(eachChoice => (

    //   ))}
    // </ChoiceContainerList>
  )
}

export default ChoiceContainer
