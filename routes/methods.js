import { StudentModel } from "../schemas";

let getStudents = (req, res, next) => {
    StudentModel.find(req.query.name ? { name: req.query.name } : null)
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(500).send(error));
}

let postStudent = (req, res, next) => {
    StudentModel.create(req.body)
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(500).send(error));
}

let getOneStudent = (req, res, next) => {
    StudentModel.findById(req.params.id)
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(500).send(error));
}

let putStudent = (req, res, next) => {
    StudentModel.findByIdAndUpdate(req.params.id, req.body, { upsert: true, rawResult: true })
        .then((result) => {
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
        })
        .catch((error) => res.status(500).send(error));
}

let deleteStudents = (req, res, next) => {
    StudentModel.findByIdAndRemove(req.params.id)
        .then((result) => res.status(result ? 200 : 204).send(result))
        .catch((error) => res.status(500).send(error));
}

export const students = {
    get: getStudents,
    post: postStudent,
    getOne: getOneStudent,
    put: putStudent,
    delete: deleteStudents
};