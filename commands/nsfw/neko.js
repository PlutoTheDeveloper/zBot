exports.settings = {command: "neko", description: "Shows a picture of a neko from `nekos.life`", usage: "neko", throttle: {usages: 4, duration: 10} }
exports.run = (client, message) => {
	const loading = ["Just a moment...", "Lewding it up...", "Getting prepared...", "One second...", "Grabbing image...", "Getting lewd..."]
	message.channel.zend(`${client.util.emoji("loading", message.guild)} ${loading[Math.floor(Math.random()*loading.length)]}`).then(mes => {
		const snekfetch = require("snekfetch")
		snekfetch.get("https://nekos.life/api/v2/img/neko")
			.set("Accept", "application/json")
			.then(res => {
				mes.edit(`${client.util.emoji("ok", message.guild)} Here's your neko!\n${JSON.parse(res.text).url}`)
			})
	})
}
