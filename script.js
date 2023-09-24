const uploadFile = document.querySelector('.upload')
const uploadInput = document.querySelector('#upload_input')
const recentFilesMoreOption = document.querySelectorAll('.row svg:last-of-type')
const moreOptionRecentFiles  = document.querySelector('.more_option_recent_files')

uploadFile.onclick =()=>{
	uploadInput.click()
}

recentFilesMoreOption.forEach(svg => {
	svg.onclick = (e) => {
		console.log(moreOptionRecentFiles)
		console.log(moreOptionRecentFiles.offsetWidth)
		moreOptionRecentFiles.style.left = `${ e.x - moreOptionRecentFiles.offsetWidth}px`
		moreOptionRecentFiles.style.top = `${e.y - moreOptionRecentFiles.offsetWidth}px`
moreOptionRecentFiles.style.display="block";
	}

})