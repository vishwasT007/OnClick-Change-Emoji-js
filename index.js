// Select all Elemnts
const starEyeEmoji = document.querySelector('.closed');
const coolSpectEmoji = document.querySelector('.opened');

// ADD Event Listeners

starEyeEmoji.addEventListener('click', () => {
	if (coolSpectEmoji.classList.contains('opened')) {
		coolSpectEmoji.classList.add('active');
		starEyeEmoji.classList.remove('active');
	}
});

coolSpectEmoji.addEventListener('click', () => {
	if (starEyeEmoji.classList.contains('closed')) {
		starEyeEmoji.classList.add('active');
		coolSpectEmoji.classList.remove('active');
	}
});
