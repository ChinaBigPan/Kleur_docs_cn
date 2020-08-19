module.exports = {
	title: "Kleur",
	description: "使用 ANSI 颜色格式化终端文本的轻量化的 Node.js 库",
	configureWebpack: {
		resolve: {},
	},
	base: "/kleur_docs_cn/",
	markdown: {
		lineNumbers: true,
		anchor: {
			permalink: false,
		},
	},
	themeConfig: {
		displayAllHeaders: true, // 默认值：false
		smoothScroll: true,
		nav: [
			{
				text: "首页",
				link: "/",
			},
			{
				text: "Github",
				link: "https://github.com/lukeed/kleur",
			},
		],
		sidebar: [],
		lastUpdated: "上次更新",
		repo: "",
	},
	head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
};
