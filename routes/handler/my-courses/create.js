const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  try {
    const id = req.user.data.id;
    const courseId = req.body.course_id;
    const myCourse = await api.post("/api/my-courses", {
      user_id: id,
      course_id: courseId,
    });
    return res.json(myCourse.data);
  } catch (err) {
    if (err.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "service unavailable" });
    }
    const { status, data } = err.response;
    return res.status(status).json(data);
  }
};
