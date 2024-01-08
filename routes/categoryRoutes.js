import express from "express";

const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({ message: "Get all categories" });
});

router.route("/").post((req, res) => {
    res.status(200).json({ message: "Create category" });
});

router.route("/:id").get((req, res) => {
    res.status(200).json({ message: `Get category for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
    res.status(200).json({ message: `Update category for ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
    res.status(200).json({ message: `Delete category for ${req.params.id}` });
});

export default router;
