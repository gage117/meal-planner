import { useState, useEffect } from "react"

const LandingPage = (props) => {
  const [ divStyle, setDivStyle ] = useState({})
  
  useEffect( () => {
    if( props.open ){
      setDivStyle({marginLeft: "220px"});
    } else {
      setDivStyle({marginLeft: 0})
    }
  }, [props.open])

  return (
    <div className={props.classes}>
      <h1>Hello!</h1>
      <h3>This site is still in progress, but at the moment feel free to explore the Meal Planner and the Shopping List that it generates. There's also a Saved Recipes page where you can take a peek at all of the default recipes at the moment, and even login/signup through Auth0.</h3>
    </div>
  )
}

export default LandingPage;