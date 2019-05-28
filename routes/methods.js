import { StudentModel } from "../schemas";

let getStudents = async (req, res, next) => {
    try {
        const result = await StudentModel.find(req.query.name ? { name: req.query.name } : null).exec();
        if (result) {
            res.status(200).send(result);
        }
        else {
            throw "Couldn't find anything!";
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

let postStudent = async (req, res, next) => {
    try {
        const result = await StudentModel.create(req.body);
        if (result) {
            res.status(200).send(result);
        }
        else {
            throw "Couldn't create student!";
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

let getOneStudent = async (req, res, next) => {
    try {
        const result = await StudentModel.findById(req.params.id).exec();
        if (result) {
            res.status(200).send(result);
        }
        else {
            throw "A student with that ID was not found!";
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

let putStudent = async (req, res, next) => {
    try {
        const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body, { upsert: true, rawResult: true });
        if (result) {
            if (result.lastErrorObject.updatedExisting) {
                if (req.body.address.gata == result.value.address.gata &&
                    req.body.address.postnummer == result.value.address.postnummer &&
                    req.body.address.ort == result.value.address.ort &&
                    req.body.email == result.value.email &&
                    req.body.name == result.value.name) {
                    res.status(204).send(result.value);
                }
                else {
                    res.status(200).send(result.value);
                }
            }
            else {
                res.status(201).send(result.value);
            }
        }
        else {
            throw "A student with that ID was not found!";
        }
    }
    catch {
        res.status(500).send(error);
    }
}

let deleteStudents = async (req, res, next) => {
    try {
        const result = await StudentModel.findByIdAndRemove(req.params.id);
        if (result) {
            res.status(result ? 200 : 204).send(result);
        }
        else {
            throw "Something went terribly wrong because this code is unreachable!";
        }
    }
    catch {
        res.status(500).send(error)
    }
}

export const students = {
    get: getStudents,
    post: postStudent,
    getOne: getOneStudent,
    put: putStudent,
    delete: deleteStudents
};