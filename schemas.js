import { Schema, model } from 'mongoose';

const Student = new Schema(
    {
        email: {
            type: String,
        },
        name: {
            type: String,
            required: true
        },
        address: {
            gata: {
                type: String
            },
            postnummer: {
                type: String
            },
            ort: {
                type: String
            }
        }
    });

const StudentModel = model('student', Student);

export { StudentModel };