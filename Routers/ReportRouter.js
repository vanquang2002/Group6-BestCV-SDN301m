const express = require('express');
const router = express.Router();
const reportController = require('../Controller/ReportController');

router.get('/report/get-all-reports', reportController.getAllReports);
router.get('/report/get-report/:uid', reportController.getReportByUserId);
router.post('/report/add-report', reportController.insertReport);
router.patch('/report/update-report-status/:rid', reportController.updateReportStatus);
router.delete('/report/delete-report/:rid', reportController.deleteReportById);

module.exports = router;