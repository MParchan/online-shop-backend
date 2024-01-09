import asyncHandler from "express-async-handler"

//@desc Get all categories
//@route GET /api/categories
//@access public
const getCategories = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all categories" });
});

//@desc Create new category
//@route POST /api/categories
//@access public
const createCategory = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    if (!name) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({ message: "Create category" });
});

//@desc Get category
//@route GET /api/categories/:id
//@access public
const getCategory = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get category for ${req.params.id}` });
});

//@desc Update category
//@route PUT /api/categories/:id
//@access public
const updateCategory = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update category for ${req.params.id}` });
});

//@desc Delete category
//@route DELETE /api/categories/:id
//@access public
const deleteCategory = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete category for ${req.params.id}` });
});

export { getCategories, createCategory, getCategory, updateCategory, deleteCategory };
