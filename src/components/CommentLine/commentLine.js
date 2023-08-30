import MKBox from "components/MKBox";
import PropTypes from "prop-types";
import moment from "moment";

function CommentLine({ username, date, comment }) {
  return (
    <MKBox mb={2}>
      <p>
        <h4 style={{ fontSize: "15px" }}>{username}</h4>
        <span style={{ fontSize: "12px" }}>{moment(date).format("DD/MM/YYYY HH:mm:ss")}</span>
      </p>
      <p style={{ fontSize: "15px", marginBottom: "20px" }}>{comment}</p>
      <hr />
    </MKBox>
  );
}

CommentLine.propTypes = {
  username: PropTypes.string,
  date: PropTypes.string,
  comment: PropTypes.string,
};

export default CommentLine;
