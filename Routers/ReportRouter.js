import express from 'express';
const router = express.Router();
import reportController from '../Controller/ReportController';

router.get('/report/get-all-reports', reportController.getAllReports);
router.get('/report/get-report/:uid', reportController.getReportByUserId);
router.post('/report/add-report', reportController.insertReport);
router.patch('/report/update-report-status/:rid', reportController.updateReportStatus);
router.delete('/report/delete-report/:rid', reportController.deleteReportById);

export default router;
