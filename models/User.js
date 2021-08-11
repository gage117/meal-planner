const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// import schema from SiteRecipe.js
const siteRecipe = require("./SiteRecipe");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    personalRecipes: [
    {
        name: {
        type: String,
        required: true,
        },
        instructions: {
        type: String,
        },
        ingredients: [
        {
            name: String,
            quantity: Number,
            unit: String,
        },
        ],
    },
    ],
    siteRecipes: [
    {
        type: Schema.Types.ObjectId,
        ref: 'SiteRecipe'
        }
    ],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `recipeCount` with the number of saved recipes we have
userSchema.virtual("recipeCount").get(function () {
  return this.personalRecipes.length + this.siteRecipes.length;
});

const User = model("User", userSchema);

module.exports = User;
