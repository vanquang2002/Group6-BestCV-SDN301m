const Report = require('../Model/Report')

exports.getAllReports = async (req, res) => {
    try {
      const reports = await Report.find();
      res.json(reports);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  exports.getReportByUserId = async (req, res) => {
    try {
      const userId = req.params.userId;
      const reports = await Report.find({ userId });
      res.json(reports);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  exports.insertReport = async (req, res) => {
    try {
      const { userId, content } = req.body;
      const report = new Report({ userId, content, status: 'Pending' });
      await report.save();
      res.json(report);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  exports.updateReportStatus = async (req, res) => {
    try {
      const reportId = req.params.reportId;
      const { status } = req.body;
      const report = await Report.findByIdAndUpdate(reportId, { status }, { new: true });
      res.json(report);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  exports.deleteReportById = async (req, res) => {
    try {
      const reportId = req.params.reportId;
      await Report.findByIdAndDelete(reportId);
      res.send('Report deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  };