import './styles.scss';

export default function MenuItem(props: { selected: boolean, stepNumberBall: string, stepNumberTitle: string, title: string }) {
  return (

    <div className="container-step">
      <div className={`step-ball ${props.selected ? 'selected' : ''}`}>
        <p>{props.stepNumberBall}</p>
      </div>
      <div className="step1">
        <p>{props.stepNumberTitle}</p>
        <strong>{props.title}</strong>
      </div>
    </div>
  )
}