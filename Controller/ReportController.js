import { Report } from '../Model/Report';
import mongoose from 'mongoose';

const getAllReports = async (req, res) => {
    try {
      const reports = await Report.find();
      res.json(reports);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
const getReportByUserId = async (req, res) => {
    try {
      const userId = req.params.userId;
      const reports = await Report.find({ userId });
      res.json(reports);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
const insertReport = async (req, res) => {
    try {
      const { userId, content } = req.body;
      const report = new Report({ userId, content, status: 'Pending' });
      await report.save();
      res.json(report);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
const updateReportStatus = async (req, res) => {
    try {
      const reportId = req.params.reportId;
      const { status } = req.body;
      const report = await Report.findByIdAndUpdate(reportId, { status }, { new: true });
      res.json(report);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
const deleteReportById = async (req, res) => {
    try {
      const reportId = req.params.reportId;
      await Report.findByIdAndDelete(reportId);
      res.send('Report deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

export {getAllReports, getReportByUserId, insertReport, updateReportStatus, deleteReportById}