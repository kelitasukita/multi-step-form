import Menu from '../../Menu/Menu';
import './styles.scss';

export default function Summary() {
  return (
    <div className="box-container">
      <Menu />
      <div className="form-container">
        <div className="summary-container">
          <div className="summary-title">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
          </div>

          <div className="finish-container">
            <div className="selected-products">
              <div className="selected-plan">
                <div className="description-plan">
                  <strong>Arcade (Monthly)</strong>
                  <span>Change</span>
                </div>
                <div className="plan-price">
                  <span>$9/mo</span>
                </div>
              </div>

              <div className="line" />

              <div className="selected-add-ons">
                <div className="add-ons-item">
                  <strong>Online service</strong>
                  <span>+$1/mo</span>
                </div>

                <div className="add-ons-item">
                  <strong>Larger storage</strong>
                  <span>+$2/mo</span>
                </div>
              </div>
            </div>

            <div className="total-price">
              <span>Total(per month)</span>
              <strong>+$12/mo</strong>
            </div>

          </div>

          <div className="back-next">
            <span>Go back</span>
            <button type="submit">Confirm</button>
          </div>

        </div>
      </div>
    </div>
  )
}