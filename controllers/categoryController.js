import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

//@desc Get all categories
//@route GET /api/categories
//@access public
const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find();
    res.status(200).json(categories);
});

//@desc Create new category
//@route POST /api/categories
//@access public
const createCategory = asyncHandler(async (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const category = await Category.create({
        name,
    });
    res.status(201).json(category);
});

//@desc Get category
//@route GET /api/categories/:id
//@access public
const getCategory = asyncHandler(async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            res.status(404);
            throw new Error("Category not found");
        }
        res.status(200).json(category);
    } catch {
        res.status(404);
        throw new Error("Category not found");
    }
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
