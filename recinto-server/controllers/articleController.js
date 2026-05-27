/* eslint-disable no-undef */
const Article = require('../models/Article');

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find({}).sort({ createdAt: -1 });
    res.json({ articles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createArticle = async (req, res) => {
  try {
    let { title, content, isActive } = req.body;

    if (typeof content === 'string') {
      try {
        content = JSON.parse(content);
      } catch {
        content = [content];
      }
    }

    if (!title || !content || !content.length) {
      return res.status(400).json({ message: 'Title and content are required.' });
    }

    const name = title.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/[\s-]+/g, '-');

    let imagePath = '';
    if (req.file) {
      imagePath = `/${req.file.path.replace(/\\/g, '/')}`;
    } else if (req.body.image) {
      imagePath = req.body.image; 
    }

    const article = await Article.create({
      title,
      name,
      content,
      image: imagePath,
      isActive: isActive === 'true' || isActive === true
    });

    res.status(201).json(article);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'An article with a similar title already exists.' });
    }
    res.status(400).json({ message: error.message });
  }
};

const updateArticle = async (req, res) => {
  try {
    let updateData = { ...req.body };

    if (updateData.title) {
      updateData.name = updateData.title.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/[\s-]+/g, '-');
    }

    if (typeof updateData.content === 'string') {
      try {
        updateData.content = JSON.parse(updateData.content);
      } catch {
        updateData.content = [updateData.content];
      }
    }

    if (updateData.isActive !== undefined) {
      updateData.isActive = updateData.isActive === 'true' || updateData.isActive === true;
    }

    if (req.file) {
      updateData.image = `/${req.file.path.replace(/\\/g, '/')}`;
    }

    const article = await Article.findByIdAndUpdate(req.params.id, updateData, { new: true });
    
    res.json(article);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'An article with a similar title already exists.' });
    }
    res.status(400).json({ message: error.message });
  }
};

const deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getArticles, createArticle, updateArticle, deleteArticle };