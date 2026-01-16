const CallLogDb = require("../models/callLogsDb");
const { format } = require("date-fns");
const currDate = new Date();
const today = format(currDate, "yyyy-MM-dd");

// :::: Add new logs
exports.handlePostNewLogs = async (req, res) => {
  try {
    const { name, date, duration, outcome, tenantId } = req.body;

    if (!name)
      return res.status(400).json({ message: "Name field is required" });

    const existLogs = await CallLogDb.findOne({ name });

    await CallLogDb.create({
      name,
      date: today,
      duration,
      outcome,
      //   ::::::::::::::::::::::::::::::::::::::::
      tenantId: req.user.id,
    });
    return res
      .status(201)
      .json({ success: true, message: "New logs added successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal error",
      error: error.message,
    });
  }
};

// :::::::: Get call logs list :::::::::::::::::
exports.handleGetAllLogs = async (req, res) => {
  const callLogsList = await CallLogDb.find({});
  return res
    .status(200)
    .json({ data: callLogsList, user: req.user, success: true });
};

// :::::::: Get my call logs list ::::::::::::::::://///
exports.handleGetMyLogs = async (req, res) => {
  const MyCallLogsList = await CallLogDb.find({
    tenantId: req.user.id,
  });
  return res
    .status(200)
    .json({ data: MyCallLogsList, user: req.user, success: true });
};

// :::::::: Get logs by Id :::::::::::::::::
exports.handleGetLogById = async (req, res) => {
  const data = await CallLogDb.findById(req.params.id);
  return res.status(200).json({ data: data, success: true });
};

// :::::::: Update logs :::::::::::::::::
exports.handleUpdateLogById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No data provide to update" });
    }
    const updateLogs = await CallLogDb.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updateLogs) {
      return res.status(404).json({ message: "Logs not updated" });
    }
    res
      .status(200)
      .json(
        updateLogs,
        { message: "Logs updated successfully" },
        { success: true }
      );
  } catch (error) {
    console.error("Error updating Logs: ", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ::::::::::: Delete logs ::::::::::::::

exports.handleDeleteLogById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteLogs = await CallLogDb.findByIdAndDelete(id);
    res.status(200).json(deleteLogs, { message: "Logs deleted" });
  } catch (error) {
    console.error("Error deleting Logs:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
