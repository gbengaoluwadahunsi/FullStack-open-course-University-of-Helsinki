

const Notification = ({ fetched }) => {
  if (fetched === null) {

    return null
  }

  return (
    <div className='error'>
      { fetched}
    </div>
  )
}

export default Notification