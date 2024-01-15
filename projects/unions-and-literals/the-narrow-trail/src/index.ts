export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let availableResource: "food" | "water" | undefined;
	let day = 1;
	let food = 5;
	let water = 5;

	while (day <= 7) {
		const randomNumber = Math.floor(Math.random() * 6) + 1;

		switch (randomNumber) {
			case 1:
				availableResource = "food";
				break;
			case 2:
				availableResource = "water";
				break;
			case 3:
			case 4:
			case 5:
			case 6:
				if (availableResource === undefined) {
					availableResource = randomNumber % 2 === 0 ? "food" : "water";
				} else {
					if (availableResource === "food") {
						food += randomNumber;
					} else {
						water += randomNumber;
					}
					availableResource = undefined;
				}
				break;
		}

		food -= 1;
		water -= 1;

		if (food === 0 || water === 0) {
			return false;
		}

		day += 1;
	}

	return true;
}
