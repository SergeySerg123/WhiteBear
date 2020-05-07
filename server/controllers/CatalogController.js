const CatalogModel = require("../db/models/CatalogModel");

const CatalogController = {
  all: async (req, res) => {
    const categories = await CatalogModel.find()
      .populate("categories")
      .populate("beers")
      .populate("parentCategory");
    res.json(categories);
  },

  getById: async (req, res) => {
    const category = await findCategoryById(req.params.id);
    res.json(category);
  },

  create: async (req, res) => {
    const newCategory = new CatalogModel(req.body);
    const savedNewCategory = await newCategory.save();
    res.json(savedNewCategory);
  },

  update: async (req, res) => {
    
    //TODO data validation
    const update = {
      title: req.body.title,
      categories: [...req.body.categories],
      parentCategoryId: req.body.parentCategoryId
    };

    CatalogModel.findByIdAndUpdate({ _id: req.params.id }, update, (err, c) => {
      if (c != null) {
        CatalogModel.update(
          { _id: update.parentCategoryId },
          { $push: { categories: c._id } },
          (err, raw) => {
            res.json(raw);
          }
        );
      }
    });
  },

  delete: async (req, res) => {
    const result = await CatalogModel.findByIdAndDelete({_id: req.params.id});
    res.json(result);
  },
};

const findCategoryById = async (id) => {
    return await CatalogModel.findById({ _id: id })
    .populate("categories")
    .populate("beers")
    .populate("parentCategory");
}

module.exports = CatalogController;
