import { Schema, model, models } from "mongoose";


const GetInTouchSchema = new Schema({
    email: {type: String, required: true},
    
}, {timestamps: true});


export const GetInTouch = models?.GetInTouch || model('GetInTouch', GetInTouchSchema);