

const SignInPopup = ({toggle}) => {
  return (
    <div className="popup-content">
        <h2>Это всплывающее окно!</h2>
        <p>Здесь может быть ваш контент.</p>
        <button onClick={toggle}>Закрыть</button>
    </div>
  )
}

export default SignInPopup