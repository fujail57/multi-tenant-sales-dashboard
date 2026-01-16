const LeadDb = require("../models/leadsDb");

// :::: Add new leads
exports.handlePostNewLead = async (req, res) => {
  try {
    const { name, phone, tenantId, status } = req.body;

    if (!name || !phone)
      return res.status(400).json({ message: "All fields are required" });

    const existLead = await LeadDb.findOne({ phone });
    if (existLead)
      return res.status(400).json({
        message: "A lead exist with this number",
      });

    await LeadDb.create({
      name,
      phone,
      status,
      //   ::::::::::::::::::::::::::::::::::::::::
      tenantId: req.user.id,
    });
    return res
      .status(201)
      .json({ success: true, message: "New lead added successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal error",
      error: error.message,
    });
  }
};

// :::::::: Get call leads list :::::::::::::::::
exports.handleGetAllLeads = async (req, res) => {
  const leadsList = await LeadDb.find({});
  return res
    .status(200)
    .json({ data: leadsList, user: req.user, success: true });
};

// :::::::: Get My call leads list :::::::::::::::::
exports.handleGetMyLeads = async (req, res) => {
  const leadsList = await LeadDb.find({ tenantId: req.user.id });
  return res
    .status(200)
    .json({ data: leadsList, user: req.user, success: true });
};

// :::::::: Get Leads by Id :::::::::::::::::
exports.handleGetLeadById = async (req, res) => {
  const data = await LeadDb.findById(req.params.id);
  return res.status(200).json({ data: data, success: true });
};

// :::::::: Update Lead :::::::::::::::::
exports.handleUpdateLeadById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No data provide to update" });
    }
    const updateLead = await LeadDb.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updateLead) {
      return res.status(404).json({ message: "Lead not updated" });
    }
    res
      .status(200)
      .json(
        updateLead,
        { message: "Lead updated successfully" },
        { success: true }
      );
  } catch (error) {
    console.error("Error updating Lead: ", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ::::::::::: Delete leads ::::::::::::::

exports.handleDeleteLeadById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteLead = await LeadDb.findByIdAndDelete(id);
    res.status(200).json(deleteLead, { message: "Lead deleted" });
  } catch (error) {
    console.error("Error deleting Lead:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
