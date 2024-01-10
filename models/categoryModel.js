import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Category name is required"],
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Category", categorySchema);
