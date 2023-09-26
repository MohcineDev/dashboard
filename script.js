const uploadFile = document.querySelector('.upload')
const uploadInput = document.querySelector('#upload_input')
const recentFilesMoreOption = document.querySelectorAll('.row svg:last-of-type')
const recentFilesDialog = document.querySelector('.more_option_recent_files')

uploadFile.onclick = () => {
	uploadInput.click()
}

recentFilesMoreOption.forEach(svg => {

	let width = recentFilesDialog.offsetWidth
	let height = recentFilesDialog.offsetHeight
	//initialize the values
	recentFilesDialog.style.left = 0;
	recentFilesDialog.style.top = 0

	svg.onclick = (e) => {

		console.log(e.x, e.y)

		recentFilesDialog.style.left = `${e.x - width}px`
		recentFilesDialog.style.top = `${e.y - height}px`
		recentFilesDialog.style.display = "block";

		document.body.addEventListener('click', (e) => {
			if (e.target.classList[0] != 'more_option_recent_files' && e.target.tagName != 'svg') {
				recentFilesDialog.style.display = "none"
			}  
		})
	}

})