const articleService = require('../services/article.service');

const createArticle = async (req, res) => {
	const { text, date, points, public: isPublic } = req.body;
	try {
		const newArticle = await articleService.createArticle({ text, date, points, public: isPublic });
		res.status(201).json(newArticle);
	} catch (error) {
		console.log('Error creating article:', error);
		res.status(500).json({ error: 'An error occurred while creating the article.' });
	}
};

const getAllArticles = async (req, res) => {
	try {
		const articles = await articleService.getAllArticles();
		res.status(200).json(articles);
	} catch (error) {
		console.error('Error fetching articles:', error);
		res.status(500).json({ error: 'An error occurred while fetching articles.' });
	}
};

const getArticleById = async (req, res) => {
	const { id } = req.params;
	try {
		const article = await articleService.getArticleById(id);
		if (!article) {
			return res.status(404).json({ error: 'Article not found' });
		}
		res.status(200).json(article);
	} catch (error) {
		console.error('Error fetching article:', error);
		res.status(500).json({ error: 'An error occurred while fetching the article' });
	}
}

const updateArticle = async (req, res) => {
	const { id } = req.params;
	try {
		const updatedArticle = await articleService.updateArticle(id, req.body);
		res.status(200).json(updatedArticle);
	} catch (error) {
		console.error('Error updating article:', error);
		res.status(error.message === 'Article not found' ? 404 : 500).json({ error: error.message });
	}
};

const deleteArticle = async (req, res) => {
	const { id } = req.params;
	try {
		await articleService.deleteArticle(id);
		res.status(204).send();
	} catch (error) {
		console.error('Error deleting article:', error);
		res.status(error.message === 'Article not found' ? 404 : 500).json({ error: error.message });
	}
};

module.exports = {
	createArticle,
	getAllArticles,
	getArticleById,
	updateArticle,
	deleteArticle,
};