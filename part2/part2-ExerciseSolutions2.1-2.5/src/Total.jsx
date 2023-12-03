

const Total = ({parts}) => {
  console.log(parts);

  //  const ade = [1,2,3,4]
  return (
    <>
      <h4> total of {parts.reduce((a,c) =>  a+c.exercises , 0)} exercises</h4>
    </>
  )
}

export default Total