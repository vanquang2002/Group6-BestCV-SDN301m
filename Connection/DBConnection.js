import mongoose from 'mongoose';

async function connect () {
  try {
    await mongoose.connect('mongodb://localhost:27017/BestCV');
    console.log('Connect Successfully!!!');
  } catch (error) {
    console.log(error);
    console.log('Connect failure!!!');
  }
};

export  {connect};