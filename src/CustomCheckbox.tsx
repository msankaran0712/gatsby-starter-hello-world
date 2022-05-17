import * as React from "react"
import { Form, FormCheck } from "@trimbleinc/modus-react-bootstrap"
import "../src/assets/css/main.scss"

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, isReact, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return isReact ? (
      <Form.Check
        custom
        ref={resolvedRef}
        {...rest}
        label="Modus React Checkbox"
      />
    ) : (
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          ref={resolvedRef}
          id="exampleCheckbox5"
        />
        <label className="custom-control-label" for="exampleCheckbox5">
          Modus Bootstrap Checkbox
        </label>
      </div>
    )
  }
)

export const CustomCheckbox = props => {
  const [state, setState] = React.useState(true)

  return (
    <div className="d-flex flex-column ">
      <div>
        <Form.Check
          type="switch"
          id="custom-switch"
          checked={state}
          onChange={e => setState(prev => !prev)}
          label="Toggle indeterminate state"
        />
      </div>
      <div>
        <IndeterminateCheckbox id="test1" isReact indeterminate={state} />
      </div>
      <div>
        <IndeterminateCheckbox id="test2" indeterminate={state} />
      </div>
    </div>
  )
}
