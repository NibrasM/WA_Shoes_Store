import "./Popup.css";
import { Button } from "react-bootstrap";

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <Button
          variant="danger"
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        >
          X
        </Button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
