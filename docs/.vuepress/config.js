module.exports = {
	title: "KLEUR",
	description: "The fastest Node.js library for formatting terminal text with ANSI colors~!",
	configureWebpack: {
		resolve: {}
	},
	base: "/kleur_docs_cn/",
	markdown: {
		lineNumbers: true,
		anchor: {
			permalink: false
		}
	},
	themeConfig: {
		displayAllHeaders: true, // 默认值：false
		smoothScroll: true,
		nav: [
			{
				text: "首页",
				link: "/"
			},
			{
				text: "Github",
				link: "https://github.com/lukeed/kleur"
			}
		],
		sidebar: [],
		lastUpdated: "上次更新",
		repo: ""
	},
	head: [["link", { rel: "icon", href: "/images/favicon.ico" }]]
};
