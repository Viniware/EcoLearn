const { Article } = require('../models/Article');

const createArticle = async (data) => {
	const { text, date, points, public: isPublic } = data;
	
	if (!text || !date || points === undefined || isPublic === undefined) {
		throw new Error('All fields are required');
	}
	
	const newArticle = await Article.create({
		text,
		date,
		points,
		public: isPublic,
	});
	
	return newArticle;
};

const getAllArticles = async () => {
	return await Article.findAll();
};

const getArticleById = async (id) => {
	const article = await Article.findByPk(id);
	if (!article) {
		throw new Error('Article not found');
	}
	
	return article;
};

const updateArticle = async (id, data) => {
	const article = await Article.findByPk(id);
	if (!article) {
		throw new Error('Article not found');
	}
	
	article.text = data.text !== undefined ? data.text : article.text;
	article.date = data.date !== undefined ? data.date : article.date;
	article.points = data.points !== undefined ? data.points : article.points;
	article.public = data.public !== undefined ? data.public : article.public;
	
	await article.save();
	return article;
};

const deleteArticle = async (id) => {
	const article = await Article.findByPk(id);
	if (!article) {
		throw new Error('Article not found');
	}
	await article.destroy();
};

module.exports = {
	createArticle,
	getAllArticles,
	getArticleById,
	updateArticle,
	deleteArticle,
};