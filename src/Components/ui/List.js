import classes from "./List.module.css";


function List(props) {
  return (
    <ul className={classes.list}>
      {props.children}
    </ul>
  )
}

export default List